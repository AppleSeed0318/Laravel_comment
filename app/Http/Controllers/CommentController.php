<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function getItemList(Request $request) {
        
        $data = DB::table('comment')->get();
        
        return $data;
     }

    public function addItem(Request $request) {
        
        $id = DB::table('comment')->insertGetId([
            'username' => $request['username'],
            'parent_id' => $request['parent_id'],
            'contents' => $request['contents']
        ]);
        return $id;
    }
}
