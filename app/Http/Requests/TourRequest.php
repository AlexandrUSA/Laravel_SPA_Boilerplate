<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class TourRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
      $user = JWTAuth::parseToken()->toUser();
      return $user->can('crud-tours');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
      return [
        'title'         => 'required|String|min:2|max:70',
        'service'       => 'required|String|min:2|max:70',
        'country'       => 'required|String|min:2|max:70',
        'visa_service'  => 'required|boolean',
        'accommodation' => 'required|boolean',
        'days'          => 'required|integer',
        'price'         => 'required|integer',
      ];
    }
}
