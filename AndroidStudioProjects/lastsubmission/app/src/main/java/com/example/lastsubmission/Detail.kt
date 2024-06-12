package com.example.lastsubmission

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.bumptech.glide.Glide

class Detail : AppCompatActivity() {
    @SuppressLint("MissingInflatedId")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail)

        supportActionBar!!.setDisplayHomeAsUpEnabled(true)

        val foodDetail = intent.getParcelableExtra<food>(MainActivity.INTENT_PARCELABLE)

        val name = findViewById<TextView>(R.id.tittle)
        val description = findViewById<TextView>(R.id.content)
        val photo = findViewById<ImageView>(R.id.imageView2)

        // Check if foodDetail is not null before accessing its properties
        if (foodDetail != null) {
            // Assuming foodDetail.photo is an Int representing a resource ID
            Glide.with(this)
                .load(foodDetail.photo) // Assuming foodDetail.photo is a URL or resource name
                .into(photo)
            name.text = foodDetail.name
            description.text = foodDetail.description
        }
        val btnShare: Button = findViewById(R.id.btnShare)
        btnShare.setOnClickListener {
            shareContent()
        }
    }
    private fun shareContent() {
        val shareIntent = Intent().apply {
            action = Intent.ACTION_SEND
            type = "text/plain"
            putExtra(Intent.EXTRA_TEXT, "This is the content you want to share.")
        }

        startActivity(Intent.createChooser(shareIntent, "Share via"))
    }
}

