<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Utils\Utils;
use Illuminate\Support\Facades\Mail;
use App\Mail\Registration;

const ROLE = 'role';
const PERMISSION = 'permission';
const TEAM = 'team';

class Organization extends Model
{

  public static function createRole (array $paras)
  {
    return self::createLogic(\App\ROLE, $paras);
  }

  public static function createPermission (array $paras)
  {
    return self::createLogic(\App\PERMISSION, $paras);
  }

  public static function createTeam (array $paras)
  {
    return self::createLogic(\App\TEAM, $paras);
  }



  public static function createLogic (string $logicType, array $params)
  {
    $logic = null;
    switch ($logicType) {
      case \App\ROLE:
        $logic = new Role();
        $logic->department_id = $params['department_id'];
        break;
      case \App\PERMISSION:
        $logic = new Permission();
        break;
      case \App\TEAM:
        $logic = new Team();
        break;
    }

    if ($logic !== null) {
      $logic->name = $params['name'];
      $logic->display_name = $params['display_name'];
      $logic->description  = $params['description'];
      $logic->save();
    }

    return $logic;
  }

  public static function getRegistrationParams($data, bool $registration = false)
  {
    $params = [
      'name' => $data['name'],
      'last_name' => $data['last_name'],
      'email' => $data['email'],
      'password' => bcrypt($data['password']),
    ];

    if (!$registration) {
      $params['patronymic'] = $data['patronymic'];
      $params['sex'] = $data['sex'];
      $params['passport'] = $data['passport'];
      $params['birthday']= $data['birthday'];
      $params['role_id'] = $data['role_id'];
      $params['phone_number'] = $data['phone_number'];
      $params['address'] = $data['address'];
      $params['details'] = $data['details'];
    }
  }

//  private static function sendNotification (array $data)
//  {
//    Mail::to($data['email'], $data);
//  }

  private static function getPassword(array $data)
  {
    if (array_key_exists('password', $data)) {
      return $data['password'];
    } else {
      return Utils::generatePassword(8);
    }
  }

  private static function checkOrganizationStatus (array $data)
  {
    if (count(User::all()) === 1) {
      Setup::CreateEnvironment();
      $role = 'director';
    } else {
      $role = array_key_exists('role_id', $data) ? $data['role_id'] : 'manager';
    }

    return $role;
  }

  /**
   * @param array $data - Массив параметров для создания
   * @return User - созданный пользователь с присвоенной должностью
   */
  public static function addMember(array $data)
  {
    $password = self::getPassword($data);

    $data['password'] = bcrypt($password);
    $data['avatar'] = self::setAvatar($data);

    $user = User::create($data);

    $user->attachRole(self::checkOrganizationStatus($data));

    Mail::to($user)->send(new Registration([
      'name' => $data['name'],
      'email' => $data['email'],
      'last_name' => $data['last_name'],
      'password' => $password,
      'company_name' => config('app.name')
    ]));

    return $user;
  }

  public static function setAvatar (array $data)
  {
    if(array_key_exists('image_file', $data))
    {
      if (array_key_exists('avatar', $data)) self::deleteAvatar($data['avatar']);
      $image = $data['image_file'];
      if ($image) {
        $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        \Image::make($image)->save(public_path('img/').$name);
        return $name;
      }
      return '';
    }
    return (array_key_exists('avatar', $data)) ? $data['avatar'] : '';
  }

  private static function deleteAvatar (string $name)
  {
    $image = \Image::make(public_path('img/').$name);
    if ($image) $image->destroy();
  }
}
