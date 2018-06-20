<?php

namespace App\Http\Controllers\Settings;

use App\Employee;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    /**
     * Update the user's profile information.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);

        $employee = Employee::find($user->employee_id);

        $params = ['first_name' => $request->get('name')];

        $employee->update($params);

        return tap($user)->update($request->only('name', 'email'));
    }
}
