<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['title', 'department_id'];

    public function positions() {
        return $this->hasOne(Department::class);
    }
}
