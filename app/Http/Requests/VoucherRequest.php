<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class VoucherRequest extends FormRequest
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
          'tour_id' => 'required|integer',
          'client_id' => 'required|integer',
          'employee_id' => 'required|integer',
          'departure_date' => 'required|date',
          'arrival_date' => 'required|date'
        ];
    }
}
