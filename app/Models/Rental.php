<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'car_id',
        'start_date',
        'end_date',
        'days',
        'daily_rate',
        'total_cost',
        'status',
        'notes'
    ];

    protected $casts = [
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
