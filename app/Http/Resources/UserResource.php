<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'user' => [
                    'id' => $this->id,
                    'UserName' => $this->UserName,
                    'Phone'  => $this->Phone,
                    'token'  => $this->when(isset($this->api_token), $this->api_token)
                ]
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
