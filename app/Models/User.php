<?php

namespace App\Models;

use App\Helpers\Searchable;
use App\Helpers\Tokenable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, Tokenable, Searchable;

    protected $table = "UserManager";

    protected $primaryKey = "id";

    public $keyType = "string";
    
    protected $searchableColums = [
        'UserName',
        'Phone'
    ];

    protected $fillable = [
        'id',
        'UserName',
        'Password',
        'Phone'
    ];

    protected $hidden = [
        'Password',
        'remember_token'
    ];

    public function getUser($request)
    {   
        $count = $this::all()->count();

        return $this::orderBy('id','desc')
                    ->search($this->searchableColums)
                    ->paginate($request->take == 'all' ? $count : $request->take);
    }
}
