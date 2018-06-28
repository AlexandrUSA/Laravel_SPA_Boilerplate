<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
  Route::post('logout', 'Auth\LoginController@logout');

  Route::get('/user', function (Request $request) {
    $user = $request->user();
    // Возращаем на клиент список всех разрешений пользователя
    $user['permissions'] = $user->getAllPermissions();
    return $user;
  });

  Route::patch('settings/profile', 'Settings\UpdateProfile');
  Route::patch('settings/password', 'Settings\UpdatePassword');

  Route::post('tasks/updateStatus','TaskController@setCompleteStatus');
  Route::post('tasks/updateExpiry','TaskController@setExpireStatus');
  Route::resource('tasks','TaskController');

  /**
   * Финансовая деятельность
   */
  Route::prefix('finance')->namespace('Finance')->group(function()
  {
    Route::get('account','BalanceController@getAccount');
    Route::get('balance','BalanceController@index');
    Route::resource('charges','ChargeController', ['except' => ['create', 'edit']]);
    Route::resource('customers','CustomerController', ['except' => ['create', 'edit']]);
    Route::resource('transfers','TransferController', ['except' => ['create', 'edit']]);
  });

  /**
   * Структура и штат организации
   */
  Route::prefix('organisation')->namespace('Organisation')->group(function()
  {
    Route::get('/employees/archive', 'EmployeeController@archive');
    Route::get('/employees/archive/{id}', 'EmployeeController@archiveOne')->where('id', '[0-9]+');
    Route::delete('/employees/archive/{id}', 'EmployeeController@deleteFromArchive')->where('id', '[0-9]+');
    Route::resource('/employees', 'UserController', ['except' => ['create', 'edit']]);
//    Route::resource('/positions', 'PositionController', ['except' => ['create', 'edit']]);
    Route::resource('/roles', 'RoleController', ['except' => ['create', 'edit']]);
    Route::resource('/permissions', 'PermissionController', ['only' => ['index', 'store', 'destroy']]);
    Route::resource('/departments', 'DepartmentController', ['except' => ['create', 'edit']]);
    Route::resource('/clients', 'ClientController', ['except' => ['create', 'edit']]);
    Route::get('/all', 'BaseController@getAll');
  });
});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
