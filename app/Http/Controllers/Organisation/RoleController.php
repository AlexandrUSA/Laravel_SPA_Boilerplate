<?php

namespace App\Http\Controllers\Organisation;


use App\Role;
use App\Http\Requests\RoleRequest;
use App\Organization;
use App\User;
use App\Events\PermissionChanged;

class RoleController extends BaseController
{
    public function index ()
    {
      return Role::getList();
    }


    public function update (RoleRequest $request, Role $role)
    {
      $role->update($request->all());
      $role->detachPermissions($role->permissions);
      $role['users'] = $role->users;
      $role->attachPermissions($request->get('permissionsList'));
      $role['permissionsList'] = $request->get('permissionsList');

      event(new PermissionChanged());

      return $role;
    }

    public function store (RoleRequest $request)
    {
      $role = Organization::createRole($request->all());
      $role['users'] = [];
      $role['permissionsList'] = $role->permissions;
      return response($role, 201);
    }

  /**
   * @param Role $role
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
    public function destroy (Role $role)
    {
      $role->delete();
      return response('', 204);
    }
}
