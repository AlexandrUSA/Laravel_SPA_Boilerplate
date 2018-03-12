<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpKernel\Client;

class Order extends Model
{
    /**
     * @var array
     */
    protected $fillable = [
        'tour_id', 'employee_id', 'client_id', 'registration_date'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function tour() {
        return $this->hasOne(Tour::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function client() {
        return $this->hasOne(Client::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function employee() {
        return $this->hasOne(Employee::class);
    }
}
