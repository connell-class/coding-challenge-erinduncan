package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.dao.GroceryItemDao;
import com.revature.dao.GroceryListDao;
import com.revature.model.GroceryList;

public class GroceryListService {
	
	@Autowired
	GroceryListDao gld;
	
	GroceryItemDao gid;

	public void setGld(GroceryListDao gld) {
		this.gld = gld;
	}
	
	public Iterable<GroceryList> readAll() {
		return gld.findAll();
	}
	
	public GroceryList findListById(int id) {
		return gld.findById(id).get();
	}

	public GroceryList insert(GroceryList g) {
		return gld.save(g);
	}

	public GroceryList update(GroceryList g) {
		return gld.save(g);
	}
	
	public void updateListById(int id) {
		GroceryList gl = gld.findById(id).get();
		gld.save(gl);
	}

	public void delete(GroceryList g) {
		gld.delete(g);
	}
	
	public void deleteListById(int id) {
		GroceryList gl = gld.findById(id).get();
		gld.delete(gl);
	}
	
	

}
