package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.model.GroceryItem;
import com.revature.service.GroceryItemService;

@Controller
@RequestMapping(value = "/item")
@CrossOrigin(origins = "http://localhost:3000")
public class GroceryItemController {

	@Autowired
	GroceryItemService gis;

	public void setGis(GroceryItemService gis) {
		this.gis = gis;
	}

	@GetMapping("/all")
	public Iterable<GroceryItem> readAllItems() {
		return gis.readAll();
	}

	@GetMapping("/{id}")
	public GroceryItem findItemById(@PathVariable("id") int id) {
		return gis.findItemById(id);
	}
	
	@PostMapping("/add")
	public GroceryItem insertItem(@RequestBody GroceryItem g) {
		return gis.insert(g);
	}
	
	@PutMapping("/update")
	public GroceryItem updateItem(@RequestBody GroceryItem g) {
		return gis.update(g);
	}
	
	@PutMapping("/updatebyid")
	public void updateItemById(int id) {
		gis.updateItemById(id);
	}
	
	@DeleteMapping("/delete")
	public void deleteItem(GroceryItem g) {
		gis.delete(g);
	}
	
	@DeleteMapping("/deletebyid")
	public void deleteItemById(int id) {
		gis.deleteItemById(id);
	}

}
