<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /**
     * The attributes that are mass assignable.
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'patronymic', 'salary', 'birthday', 'position', 'address', 'phone_number'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders() {
        return $this->hasMany(Order::class);
    }


    public function uploadAvatar($image) {
        if($image != null) return json_encode([1]);
        Storage::delete('uploads/' . $this->image);
        $filename = str_random(10) . '.' . $image.extension();
        $image->saveAs('thumb/items/avatars', $filename);
        $image->saveAs('thumb/items/avatars', $filename);
        $this->image = $filename;
        $this->save();
    }

    public function deleteImage() {
        Storage::delete('uploads/' . $this->image);
    }

    public function getImage()
    {
        if($this->image == null)
        {
            return null;
        } else {
            return '/uploads/' . $this->image;
        }
    }
}
