<?php

namespace App\Http\Controllers\Organisation;

use App\Permission;
use Illuminate\Http\Request;
use App\Http\Requests\PermissionRequest;
use App\Organization;


//use App\User;
//use App\Permission;
//use Tymon\JWTAuth\Facades\JWTAuth;


class PermissionController extends BaseController
{
  /**
   * Получаем коллекцию всех разрешений приложения
   * @return \Illuminate\Database\Eloquent\Collection|static[]
   */
  public function index ()
  {
        return Permission::all();
  }

  /**
   * Добавляем новое разрешение
   * @param PermissionRequest $request
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
  public function store (PermissionRequest $request)
  {
    $permission = Organization::createPermission($request->all());
    return response($permission, 201);
  }

  /**
   * Удаляем разрешение
   * @param Permission $permission
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
  public function destroy (Permission $permission)
  {
    $permission->delete();
    return response('', 204);
  }
}
