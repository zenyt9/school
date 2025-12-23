<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand',
        'model',
        'year',
        'plate_number',
        'color',
        'seats',
        'features',
        'daily_rate',
        'status',
        'image',
        'category_id'
    ];

    // Категори relation
    public function category()
    {
        return $this->belongsTo(CarCategory::class, 'category_id');
    }

    // Түрээсүүд relation
    public function rentals()
    {
        return $this->hasMany(Rental::class);
    }

    // Захиалгаууд relation
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
