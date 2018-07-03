<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
  use SoftDeletes;
  /**
   * The attributes that are mass assignable.
   * @var array
   */
  protected $fillable = [
    'first_name',
    'last_name',
    'patronymic',
    'country',
    'city',
    'street',
    'number',
    'passport',
    'tour_id',
    'phone_number',
    'sex',
    'email',
    'birthday'
  ];

  protected $dates = [
    'created_at',
    'updated_at',
    'deleted_at',
  ];

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasOne
   */
  public function voucher()
  {
    return $this->hasOne(Voucher::class);
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasOne
   */
  public function tour()
  {
    return $this->hasOne(Tour::class);
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function orders()
  {
    return $this->hasMany(Order::class);
  }
}
