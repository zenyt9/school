<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'car_id',
        'booking_date',
        'start_date',
        'end_date',
        'status',
        'notes'
    ];

    protected $casts = [
        'booking_date' => 'date',
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    // Үйлчлүүлэгч relation
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    // Машин relation
    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
