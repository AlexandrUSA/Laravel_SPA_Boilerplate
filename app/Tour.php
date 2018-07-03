<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tour extends Model
{
  use SoftDeletes;
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'title', 'service', 'country', 'resort', 'transport', 'visa_service', 'accommodation', 'accommodation_type', 'food',
    'food_type', 'excursions', 'days', 'price'
  ];

  protected $dates = [
    'created_at',
    'updated_at',
    'deleted_at',
  ];

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function orders()
  {
    return $this->hasMany(Order::class);
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
   */
  public function services()
  {
    return $this->belongsToMany(
      Service::class,
      'tours_services',
      'tour_id',
      'service_id'
    );
  }
}
