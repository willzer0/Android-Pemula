package com.example.lastsubmission
import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class food(
    var name: String,
    var description: String,
    var photo: String,

) : Parcelable
