package com.revature.controller;

import com.revature.model.GroceryList;
import com.revature.service.GroceryListService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/list")
@CrossOrigin(origins = "http://localhost:3000")
public class GroceryListController {

	@Autowired
	GroceryListService gls;
	
	public void setGls(GroceryListService gls) {
		this.gls = gls;
	}

	@GetMapping("/all")
	public Iterable<GroceryList> findAllLists() {
		return gls.readAll();
	}

	@GetMapping("/{id}")
	public GroceryList findListById(@PathVariable("id") int id) {
		return gls.findListById(id);
	}

	@PostMapping("/new")
	public void insertList(@RequestBody GroceryList gl) {
		gls.insert(gl);
	}

	@PutMapping("/update")
	public void updateList(@RequestBody GroceryList gl) {
		gls.update(gl);
	}

	@PutMapping("/updatebyid")
	public void updateListById(int id) {
		gls.updateListById(id);
	}

	@DeleteMapping("/delete")
	public void deleteList(GroceryList gl) {
		gls.delete(gl);
	}

	@DeleteMapping("/deletebyid")
	public void deleteListById(int id) {
		gls.deleteListById(id);
	}
}
