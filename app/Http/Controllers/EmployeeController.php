<?php

namespace App\Http\Controllers;

use App\Employee;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Mail;
use App\Http\Requests\EmployeeRequest;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Employee::all());
    }

    /**
     * Архив удаленных сотрудников.
     *
     * @return \Illuminate\Http\Response
     */
    public function archive()
    {
        return Employee::onlyTrashed()->get();
    }

    /**
     * Удаление сотрудников из архива.
     *
     */
    public function deleteFromArchive($id)
    {
        $employee = Employee::find($id);
        return response($employee->forceDelete(), 200);
    }

  /**
   * @param EmployeeRequest $request
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
    public function store(EmployeeRequest $request)
    {
        Employee::create($request->all());
        $employee = Employee::all()->last();;
        if ($request->get('userCreate')) {
            $data = [
                'id' => $employee->id,
                'name' => $request->get('first_name'),
                'email' => $request->get('email'),
            ];

            User::createNewUser($data);
        }
        return response($employee, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        return response($employee);
    }

    /**
     * Set employee avatar
     *
     * @param Request $request
     * @param $id
     * @return string
     */
    public function addImage(Request $request, $id)
    {
      if($request->hasFile('image')) {
        $this->validate($request, [
          'avatar' => 'image'
        ]);

        $employee = Employee::find($id);
        if($employee->avatar !== '/storage/avatars/no-avatar.jpg') {
          $path = 'public/' . substr($employee->avatar, 9);
          Storage::delete($path);
        }
        $path = Storage::putFile('public/avatars', $request->file('image'));

        $link = '/storage/' . substr($path, 7);
        $employee->update(['avatar' => $link]);
        return response($link, 200);
      }
      return response('', 204);
    }

  /**
   * @param EmployeeRequest $request
   * @param Employee $employee
   * @return Employee
   */
    public function update(EmployeeRequest $request, Employee $employee)
    {
      $user = User::find($employee->user_id);
      if ($user) {
        $user->update(['name' => $request->get('first_name')]);
      }
      $employee->update($request->all());
      return response($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
      $employee->delete();
      return response('', 204);
    }
}
