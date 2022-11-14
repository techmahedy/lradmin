<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => [
                'users' => $this->collection->map(function($data) {
                    return [
                        'id'         => $data->id,
                        'name'       => $data->UserName,
                        'mobile'     => $data->Phone,
                        'created_at' => Carbon::parse($data->created_at)->toDayDateTimeString()
                    ];
                })
            ]
        ];
    }

    public function with($request)
    {
        return [
            'isSuccess' => true,
            'message' => ''
        ];
    }
}
