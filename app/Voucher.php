<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Voucher extends Model
{
  use SoftDeletes;
  /**
   * The attributes that are mass assignable.
   * @var array
   */
  protected $fillable = [
    'tour_id',
    'client_id',
    'employee_id',
    'departure_date',
    'arrival_date'
  ];

  protected $dates = [
    'created_at',
    'updated_at',
    'deleted_at',
  ];

  public function client ()
  {
    return $this->hasOne(Client::class);
  }
}
