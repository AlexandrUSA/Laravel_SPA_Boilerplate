<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['title'];

    public function positions() {
        return $this->hasMany(Position::class);
    }
}
