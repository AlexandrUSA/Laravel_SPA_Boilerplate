<?php

namespace App\Http\Controllers\Organisation;

use App\User;
use App\Http\Requests\EmployeeRequest;
use App\Employee;
use App\Organization;
use Illuminate\Http\Request;

class UserController extends BaseController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return response(Employee::getList());
  }

  /**
   * Архив удаленных сотрудников.
   *
   * @return \Illuminate\Http\Response
   */
  public function archive()
  {
    return User::onlyTrashed()->get();
  }

  /**
   * Получаем конкретного уволенного сотрудника
   * @param Request $request
   * @return mixed
   */
  public function archiveOne(Request $request)
  {
    return User::onlyTrashed()
      ->where('id', $request->route('id'))
      ->first();
  }

  /**
   * Удаление сотрудников из архива.
   * @param Request $request
   * @return mixed
   */
  public function deleteFromArchive(Request $request)
  {
    $employee =User::onlyTrashed()
      ->where('id', $request->route('id'))
      ->first();
    $employee->forceDelete();
    return response('', 204);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param EmployeeRequest $request
   * @return \Illuminate\Http\Response
   */
  public function store(EmployeeRequest $request)
  {
    $user = Organization::addMember($request->all());
    return Employee::getOne($user);
  }

  /**
   * Display the specified resource.
   *
   * @param  int $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    return User::find($id);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  EmployeeRequest $request
   * @param  int $id
   * @return \Illuminate\Http\Response
   */
  public function update(EmployeeRequest $request, $id)
  {
    $user = User::find($id);
    $user->update($request->all());
    return response($user);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $user = User::find($id);
    $user->delete();
    return response('', 204);
  }
}
