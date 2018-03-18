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
            'title' => 'Member',
            'department_id' => 1
        ]);
    }

    public static function createEmployee($data, $position_id)
    {
        Employee::create([
            'first_name' => $data['name'],
            'position_id' => $position_id
        ]);
    }

    public static function addMember($data)
    {
        $role = null;
        $position_id = null;
        $user = User::all();

        if(count($user) == 0) {
            self::CreateEnvironment();
            $role = 'superAdmin';
            $position_id = 1;
        } else {
            $role = 'member';
            $position_id = 2;
        }

        self::createEmployee($data, $position_id);

        return $role;
    }
}
