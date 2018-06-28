<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Cashier\Billable;

class Employee extends Model
{
    use SoftDeletes, Billable;

    /**
     * @var array
     */

    protected $dates = ['deleted_at'];
    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'patronymic', 'salary', 'user_id', 'position_id', 'address', 'avatar', 'phone_number'
    ];

    public static function getList ()
    {
      $employees = [];
      $users = User::all();
      foreach ($users as $user) {
        $employees[] = self::getOne($user);
      }
      return $employees;
    }

    public static function getOne ($user)
    {
      $data = $user;
      $position = $user->roles()->get()[0];
      $department = Department::find($position['department_id']);
      $data['position_id'] = $position->id;
      $data['position_title'] = $position->display_name;
      $data['department_id'] = $department->id;
      $data['department_title'] = $department->title;
      return $data;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders() {
        return $this->hasMany(Order::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }


}
