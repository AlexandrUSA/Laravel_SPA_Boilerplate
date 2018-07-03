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
          'street'       => 'required|String|min:2|max:70',
          'tour_id'      => 'required|integer',
          'phone_number' => 'required|integer',
        ];
    }
}
