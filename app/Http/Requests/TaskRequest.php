<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
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
          'date' => 'required|date',
          'title' => 'required|min:2'
        ];
    }

    public function messages()
    {
      return [
        'date.required' => 'Поле срок выполнения обязательно для заполнения',
        'date.date' => 'Поле срок выполнения должно быть датой',
        'title.required' => 'Поле заголовка обязательно для заполнения',
        'title.min' => 'Слишком короткий заголовок'
      ];
    }
}
