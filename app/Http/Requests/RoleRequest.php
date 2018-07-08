<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class RoleRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    $user = JWTAuth::parseToken()->toUser();
    return $user->can('crud-employee');
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'name' => 'required|String|min:2|max:50',
      'display_name' => 'required|String|min:2|max:50',
      'description' => 'max:50',
      'permissionsList' => 'array',
      'department_id' => 'required|integer'
    ];
  }
}
