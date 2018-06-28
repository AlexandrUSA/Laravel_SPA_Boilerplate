<?php

namespace App;

use Laratrust\Models\LaratrustRole;

class Role extends LaratrustRole
{
  protected $fillable = [
    'id',
    'name',
    'display_name',
    'description',
    'department_id'
  ];
    public function department ()
    {
      return $this->belongsTo(Department::class);
    }

    public static function getList ()
    {
      $data = [];
      $roles = Role::all();
      foreach ($roles as $role) {
        $item = $role;
        $item['users'] = $role->users;
        $item['permissionsList'] = $role->permissions;
        $data[] = $item;
      }
      return $roles;
    }
}
