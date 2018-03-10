<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['provider_id', 'execution_date'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tours() {
        return $this->hasMany(Tour::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function provider() {
        return $this->hasOne(Provider::class);
    }
}
