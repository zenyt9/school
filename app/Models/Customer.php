<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'license_number',
        'phone',
        'email',
        'address',
        'image'
    ];

    // Түрээсүүд relation
    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }

    // Захиалгууд relation
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
