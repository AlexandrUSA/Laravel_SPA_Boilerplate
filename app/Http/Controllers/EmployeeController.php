<?php

namespace App\Http\Controllers;

use App\Employee;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Mockery\Exception;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Employee::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'first_name'   => 'required|String|min:2|max:70',
            'last_name'    => 'required|String|min:2|max:70',
            'patronymic'   => 'String|min:2|max:70',
            'phone_number' => 'String|min:7|max:15',
            'position'     => 'String',
            'salary'       => 'String',
            'birthday'     => 'date'
        ]);
        Employee::create($request->all());
        return Employee::all()->last();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        return $employee;
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

            return $link;
         }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        $this->validate($request, [
            'first_name'   => 'required|String|min:2|max:70',
            'last_name'    => 'String|min:2|max:70',
            'patronymic'   => 'String|min:2|max:70',
            'phone_number' => 'String|min:7|max:15',
            'position'     => 'String',
            'salary'       => 'Integer',
            'birthday'     => 'date'
        ]);
        $user = User::find($employee->user_id);
        $user->update(['name' => $request->get('first_name')]);
        $employee->update($request->all());
        return $employee;
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
    }
}
