<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karyawan extends Model
{
    protected $table = 'karyawan';
    protected $primarykey = 'id';
    protected $fillable = ['id','Nama','DOB','POB','Gender','KTP'];

    use HasFactory;
}
