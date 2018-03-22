<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Organization extends Model
{
    public static function CreateEnvironment()
    {
        Department::create([
            'title' => 'Head office'
        ]);

        Position::create([
            'title' => 'Director',
            'department_id' => 1
        ]);

        Position::create([
            'title' => 'Employee',
            'department_id' => 1
        ]);
    }

    public static function createEmployee($data, $position_id)
    {
        $employee = Employee::create([
            'first_name' => $data['name'],
            'position_id' => $position_id
        ]);
        return $employee->id;

    }

    public static function addMember($data)
    {
        $user = User::all();

        if(count($user) == 0) {
            self::CreateEnvironment();
            $role = 'superAdmin';
            $position_id = 1;
        } else {
            $role = 'user';
            $position_id = 2;
        }

        $employee_id = self::createEmployee($data, $position_id);

        return ['role' => $role, 'employee_id' => $employee_id];
    }
}
