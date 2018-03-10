<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'service_id', 'country', 'resort', 'transport', 'visa_service', 'accommodation', 'accommodation_type', 'food',
        'food_type', 'excursions', 'departure_date', 'arrival_date', 'price'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders() {
        return $this->hasMany(Order::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function services() {
        return $this->hasOne(Service::class);
    }
}
