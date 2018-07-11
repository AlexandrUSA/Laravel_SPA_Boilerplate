<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DepartmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * Здесь определяются права пользователя на этот ресурс
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
        'title' => 'required|String|min:5|max:70'
      ];
    }

      public function messages()
    {
      return [
        'name.required' => 'Поле названия обязательно для заполнения',
        'name.min' => 'Слишком короткое поле названия',
        'name.max' => 'Слишком длинное поле названия',
        'name.string' => 'Поле названия должно быть валидной строкой'
      ];
    }
}
