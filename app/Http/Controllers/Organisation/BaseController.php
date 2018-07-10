<?php
/**
 * Created by PhpStorm.
 * User: darryl
 * Date: 10/5/2017
 * Time: 6:12 AM
 */

namespace App\Http\Controllers\Organisation;


use App\Http\Controllers\Controller;

use App\Department;
use App\Employee;
use App\Permission;
use App\Role;
use App\Events\PermissionChanged;

class BaseController extends Controller
{
  public function getAll ()
  {
    $output = [];
//    DB::transaction(function () {
      $output['employees'] = Employee::getList();
      $output['positions'] = Role::getList();
      $output['permissions'] = Permission::all();
      $output['departments'] = Department::all();
//    });

    event(new PermissionChanged());
    return response($output, 200);
  }
}