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

  /**
   * Настройки аккаунта
   */
  Route::prefix('settings')->namespace('Settings')->group(function ()
  {
    Route::patch('profile', 'UpdateProfile');
    Route::patch('password', 'UpdatePassword');
  });

  /**
   * Финансовая деятельность
   */
  Route::prefix('finance')->namespace('Finance')->group(function()
  {
    Route::get('account','BalanceController@getAccount');
    Route::get('balance','BalanceController@index');
    Route::resource('charges','ChargeController', ['only' => ['index', 'store']]);
    Route::resource('customers','CustomerController', ['except' => ['create', 'edit']]);
    Route::resource('transfers','TransferController', ['only' => ['index', 'store']]);
    Route::resource('recipients','RecipientController', ['except' => ['create', 'edit']]);
    Route::get('/all', 'BaseController@getAll');
  });

  /**
   * Структура и штат организации
   */
  Route::prefix('organisation')->namespace('Organisation')->group(function()
  {
    Route::post('/employees/{id}/avatar', 'UserController@addImage');
    Route::get('/employees/archive', 'UserController@archive');
    Route::get('/employees/archive/{id}', 'UserController@archiveOne')->where('id', '[0-9]+');
    Route::delete('/employees/archive/{id}', 'UserController@deleteFromArchive')->where('id', '[0-9]+');
    Route::resource('/employees', 'UserController', ['except' => ['create', 'edit']]);
    Route::resource('/roles', 'RoleController', ['except' => ['create', 'edit']]);
    Route::resource('/permissions', 'PermissionController', ['only' => ['index', 'store', 'destroy']]);
    Route::resource('/departments', 'DepartmentController', ['except' => ['create', 'edit']]);
    Route::get('/all', 'BaseController@getAll');
  });

  /**
   * Деятельность организации (туры, клиенты, путевки)
   */
  Route::prefix('activity')->namespace('Activity')->group(function ()
  {
    Route::get('/clients/archive', 'ClientController@archive');
    Route::get('/clients/archive/{id}', 'ClientController@archiveOne')->where('id', '[0-9]+');
    Route::delete('/clients/archive/{id}', 'ClientController@deleteFromArchive')->where('id', '[0-9]+');
    Route::resource('/clients', 'ClientController', ['except' => ['create', 'edit']]);

    Route::get('/tours/archive', 'TourController@archive');
    Route::get('/tours/archive/{id}', 'TourController@archiveOne')->where('id', '[0-9]+');
    Route::delete('/tours/archive/{id}', 'TourController@deleteFromArchive')->where('id', '[0-9]+');
    Route::resource('/tours', 'TourController', ['except' => ['create', 'edit']]);

    Route::get('/vouchers/archive', 'VoucherController@archive');
    Route::get('/vouchers/archive/{id}', 'VoucherController@archiveOne')->where('id', '[0-9]+');
    Route::delete('/vouchers/archive/{id}', 'VoucherController@deleteFromArchive')->where('id', '[0-9]+');
    Route::resource('/vouchers', 'VoucherController', ['except' => ['create', 'edit']]);

//    Route::resource('/services', 'ServiceController', ['except' => ['create', 'edit', 'update']]);
    Route::get('/all', 'BaseController@getAll');
  });

  /**
   * Общие роуты
   */
  Route::post('tasks/updateStatus','TaskController@setCompleteStatus');
  Route::post('tasks/updateExpiry','TaskController@setExpireStatus');
  Route::resource('tasks','TaskController');
  Route::resource('chat/message','MessageController');
  Route::resource('email','EmailController', ['except' => ['create', 'edit']]);

});

Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
});
