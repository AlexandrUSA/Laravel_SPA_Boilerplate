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
          'name'   => 'required|String|min:2|max:70',
          'last_name'    => 'required|String|min:2|max:70',
//          'email' => 'unique:users',
//          'passport' => 'unique:users'
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Поле имени обязательно для заполнения',
            'name.min' => 'Слишком короткое имя',
            'name.max' => 'Слишком длинное имя',
            'name.string' => 'Имя должно быть валидной строкой',
            'last_name.required'  => 'Поле фамилии обязательно для заполнения',
            'last_name.min' => 'Слишком короткая фамилия',
            'last_name.max' => 'Слишком длинная фамилия',
            'last_name.string' => 'Фамилия должна быть валидной строкой',
//            'email.unique' => 'Сотрудник с таким Email уже зарегестрирован',
//            'passport.unique' => 'Сотрудник с такими паспортными данными уже зарегестрирован'
        ];
    }
}
