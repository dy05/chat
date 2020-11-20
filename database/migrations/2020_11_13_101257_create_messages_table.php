<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->integer('readers')->nullable();
            $table->integer('views')->nullable();
            $table->text('message');
            $table->timestamps();
            $table->timestamp('read_at')->nullable();
            $table->unsignedBigInteger('from_id');
            $table->unsignedBigInteger('to_id');
            $table->foreign('to_id')->references('id')->on('users');
            $table->foreign('from_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messages');
    }
}
