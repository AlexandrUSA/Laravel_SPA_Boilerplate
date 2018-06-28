<?php

namespace App\Http\Controllers\Organisation;

use App\Department;
use App\Http\Requests\DepartmentRequest;
use App\Role;

class DepartmentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $data = [];
      $departments = Department::all();
      foreach ($departments as $department) {
        $item = $department;
        $roles = Role::where('department_id', $department->id)->get();
        $users = [];
        foreach ($roles as $role) {
          $users2 = $role->users;
          if (count($users2) > 0) {
            array_merge($users, $users2);
          }
        }
        $item['roles'] = $roles;
        $item['users'] = $users;
        $data[] = $item;
      }
      return response($data);
    }

  /**
   * Store a newly created resource in storage.
   * @param DepartmentRequest $request
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
    public function store(DepartmentRequest $request)
    {
      Department::create($request->all());
      return response(Department::all()->last(), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
      return response($department);
    }

  /**
   * @param DepartmentRequest $request
   * @param Department $department
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
    public function update(DepartmentRequest $request, Department $department)
    {
        $department->update(request()->all());
        return response($department);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
      $department->delete();
      return response('', 204);
    }
}
