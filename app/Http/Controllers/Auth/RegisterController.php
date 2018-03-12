<?php

namespace App\Http\Controllers\Auth;

use App\Department;
use App\Employee;
use App\Position;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    use RegistersUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        return $user;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        $user = User::all();
        /**
         * Если это первый пользователь CRM то даем ему права суперадмина, должность директора
         * а также создаем 2 должности по умолчанию (директор, сотрудник)
         * и подразделение.
         * В дальнейшем пользователь сможет добавлять новые должности и подразделения
         * и изме
         */
        if (count($user) < 1) {
            $role = 'superadmin';
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
            $position_id = 1;
        } else {
            $role = 'member';
            $position_id = 2;
        }

        Employee::create([
            'first_name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'position_id' => $position_id
        ]);

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'role' => $role
        ]);
    }
}
