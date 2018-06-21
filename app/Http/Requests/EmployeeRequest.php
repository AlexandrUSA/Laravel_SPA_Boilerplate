<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
          'first_name'   => 'required|String|min:2|max:70',
          'last_name'    => 'required|String|min:2|max:70',
          'patronymic'   => 'required|String|min:2|max:70',
          'phone_number' => 'String|min:7|max:15',
          'position'     => 'String',
          'salary'       => 'String',
          'birthday'     => 'date'
        ];
    }
}
