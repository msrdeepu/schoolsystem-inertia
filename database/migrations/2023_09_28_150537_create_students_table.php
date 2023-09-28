<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->text("name")->nullable();
            $table->text("father")->nullable();
            $table->text("mother")->nullable();
            $table->text('guardian')->nullable();
            $table->bigInteger('age')->nullable();
            $table->bigInteger("adhaar")->nullable();
            $table->bigInteger("phone")->nullable();
            $table->text('email')->nullable();
            $table->text("dob")->nullable();
            $table->text('class')->nullable();
            $table->text('joindate')->nullable();
            $table->text('medium')->nullable();
            $table->bigInteger('admnumber')->nullable();
            $table->bigInteger('rollnum')->nullable();
            $table->bigInteger('pincode')->nullable();
            $table->text('address')->nullable();
            $table->text('achivements')->nullable();
            $table->text('scholorships')->nullable();
            $table->text('academicreview')->nullable();
            $table->text("otherdetails")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
