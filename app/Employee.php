<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Cashier\Billable;

class Employee extends Model
{
  use SoftDeletes, Billable;

  /**
   * @var array
   */

  protected $dates = ['deleted_at'];
  /**
   * The attributes that are mass assignable.
   * @var array
   */
  protected $fillable = [
    'first_name', 'last_name', 'patronymic', 'salary', 'user_id', 'position_id', 'address', 'avatar', 'phone_number'
  ];

  public static function getList()
  {
    $employees = [];
    $users = User::all();
    foreach ($users as $user) {
      $employees[] = self::getOne($user);
    }
    return $employees;
  }

  public static function getOne($user)
  {
    $data = $user;
    $position = $user->roles()->get()[0];
    $department = Department::find($position['department_id']);
    $data['role_id'] = $position->id;
    $data['role_title'] = $position->display_name;
    $data['department_id'] = $department->id;
    $data['department_title'] = $department->title;
    $data['role'] = $position;
    return $data;
  }

  public static function setAvatar($avatar, $id)
  {
    $user = User::find($id);
    self::deleteAvatar($user->avatar);

    $name = time() . '.' . explode('/', explode(':', substr($avatar, 0, strpos($avatar, ';')))[1])[1];
    \Image::make($avatar)->save(public_path('img/') . $name);
    $user->avatar = $name;
    $user->save();
    return $name;
  }

  private static function deleteAvatar(string $name = '')
  {
    if ($name) {
      \Image::make(public_path('img/') . $name)->destroy();
    }
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function orders()
  {
    return $this->hasMany(Voucher::class);
  }

}
