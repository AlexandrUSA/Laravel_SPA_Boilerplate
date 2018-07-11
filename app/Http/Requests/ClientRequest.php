<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class ClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
      $user = JWTAuth::parseToken()->toUser();
      return $user->can('crud-clients');
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
          'country'      => 'required|String|min:2|max:70',
          'city'         => 'required|String|min:2|max:70',
          'street'       => 'required',
          'phone_number' => 'required',
        ];
    }

  public function messages()
  {
    return [
      'first_name.required' => 'Поле имени обязательно для заполнения',
      'first_name.min' => 'Слишком короткое имя',
      'first_name.max' => 'Слишком длинное имя',
      'first_name.string' => 'Имя должно быть валидной строкой',

      'last_name.required'  => 'Поле фамилии обязательно для заполнения',
      'last_name.min' => 'Слишком короткая фамилия',
      'last_name.max' => 'Слишком длинная фамилия',
      'last_name.string' => 'Фамилия должна быть валидной строкой',

      'country.required'  => 'Поле страны обязательно для заполнения',
      'country.min' => 'Слишком короткая страна',
      'country.max' => 'Слишком длинная страна',
      'country.string' => 'Страна должна быть валидной строкой',

      'city.required'  => 'Поле улицы обязательно для заполнения',
      'city.min' => 'Слишком короткое поле улицы',
      'city.max' => 'Слишком длинное поле улицы',
      'city.string' => 'Поле улицы должно быть валидной строкой',

      'street.required'  => 'Поле города обязательно для заполнения',
      'street.min' => 'Слишком короткое поле города',
      'street.max' => 'Слишком длинное поле города',
      'street.string' => 'Поле города должно быть валидной строкой',
    ];
  }
}
