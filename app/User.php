<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laratrust\Traits\LaratrustUserTrait;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable implements JWTSubject
{
    use SoftDeletes;
    use LaratrustUserTrait;
    use Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
      'name',
      'last_name',
      'email',
      'password',
      'patronymic',
      'sex',
      'passport',
      'birthday',
      'role_id',
      'phone_number',
      'address',
      'details'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
      'password',
      'remember_token',
    ];


    protected $dates = [
      'created_at',
      'updated_at',
      'deleted_at',
    ];

    /**
     * @return int
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

  public function getAllPermissions()
  {
    $permissions = [];

    foreach($this->roles as $role) {
      foreach($role->permissions as $permission) {
        $permissions[] = $permission->name;
      }
    }

    return array_unique($permissions);
  }

  public function messages ()
  {
      return $this->hasMany(Message::class);
  }
}
