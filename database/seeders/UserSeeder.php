<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        User::factory(10)->create();
        for ($i = 0; $i < 10; $i++) {
            User::create([
                'password' => bcrypt('user'),
                'name' => "User $i",
                'email' => "user$i@user.com",
            ]);
        }
    }
}
