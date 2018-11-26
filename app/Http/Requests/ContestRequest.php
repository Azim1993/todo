<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user() ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $role = [
            'detail' => 'nullable'
        ];

        if ($this->method() == 'PUT') {
            $role['name'] = 'required|max:250|unique:contests,name,' . $this->contest->id;
        } else {
            $role['name'] = 'required|max:250|unique:contests';
        }

        return $role;
    }
}
