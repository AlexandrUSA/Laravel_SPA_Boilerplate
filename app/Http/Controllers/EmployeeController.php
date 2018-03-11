<?php

namespace App\Http\Controllers;

use App\Employee;
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
            'patronymic'   => 'nullable|String|min:2|max:70',
            'phone_number' => 'nullable|String|min:7|max:15',
            'position'     => 'nullable|String',
            'salary'       => 'nullable|String',
            'birthday'     => 'nullable|date',
            'avatar'       => 'nullable|image'
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

    public function addImage(Request $request, $id)
    {

        if($request->hasFile('image')) {
            $file = $request->file('image');
            $employee = Employee::find($id);
            $destinationPath =  public_path() . '/uploads/images/avatars/';
            $filename = str_random(20) .'.' . $file->getClientOriginalExtension();

            if($employee->avatar !== '/uploads/images/avatars/no-avatar.jpg') {
                Storage::delete($employee->avatar);
            }
            $file->move($destinationPath, $filename);
            DB::table('employees')
                ->where('id', $id)
                ->update(['avatar' => '/uploads/images/avatars/' . $filename]);
            return '/uploads/images/avatars/' . $filename;
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
