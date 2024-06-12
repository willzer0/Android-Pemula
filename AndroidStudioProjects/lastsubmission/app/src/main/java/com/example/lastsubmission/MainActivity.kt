package com.example.lastsubmission

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import android.view.View
import android.widget.Button
import android.widget.Toast
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.myrecyclerview.ListHeroAdapter

class MainActivity : AppCompatActivity() {
    private lateinit var itemfood: RecyclerView
    private val list = ArrayList<food>()

    companion object{
        val INTENT_PARCELABLE = "OBJECT_INTENT"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)


        itemfood = findViewById(R.id.item_food)
        itemfood.setHasFixedSize(true)

        list.addAll(getListFood())
        showRecyclerList()
    }

    private fun getListFood(): ArrayList<food> {
        val dataName = resources.getStringArray(R.array.data_name)
        val dataDescription = resources.getStringArray(R.array.data_description)
        val dataPhoto = resources.getStringArray(R.array.data_photo)
        val listHero = ArrayList<food>()
        for (i in dataName.indices) {
            val hero = food(dataName[i], dataDescription[i], dataPhoto[i])
            listHero.add(hero)
        }
        return listHero
    }

    private fun showRecyclerList() {
        itemfood.layoutManager = LinearLayoutManager(this)
        val listHeroAdapter = ListHeroAdapter(list)
        itemfood.adapter = listHeroAdapter

        listHeroAdapter.setOnItemClickCallback(object : ListHeroAdapter.OnItemClickCallback {
            override fun onItemClicked(data: food) {
                showDetail(data)
            }
        })
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.about -> {
                // Handle the click for menu item 1
                startActivity(Intent(this, About::class.java))
                return true
            }
            // Add more cases for other menu items if needed

            else -> return super.onOptionsItemSelected(item)
        }
    }

    private fun showDetail(food: food) {
        val intent = Intent (this,Detail::class.java)
        intent.putExtra(INTENT_PARCELABLE, food)
        startActivity(intent)
    }
}