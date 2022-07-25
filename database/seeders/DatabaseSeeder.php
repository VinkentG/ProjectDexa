<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \DB::table('users')->insert([
            [
            'id' => ("1"),
            'name' => ("User"),
            'email' => ("aa@gmail.com"),
            'password' => bcrypt("abcd"),
            ],
             [
            'id' => ("2"),
            'name' => ("Vinkent"),
            'email' => ("bb@gmail.com"),
            'password' => bcrypt("abcd"),
            ],
        ]);
    }
}
