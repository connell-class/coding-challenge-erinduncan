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
	
//	public GroceryList findItemById(int id) {
//		return gld.findById(id);
//	}

	public GroceryList insert(GroceryList g) {
		return gld.save(g);
	}

	public GroceryList update(GroceryList g) {
		return gld.save(g);
	}

	public void delete(GroceryList g) {
		gld.delete(g);
	}
	
//	public void deleteItemById(int id) {
//		gld.deleteItemById(id);
//	}
	
	

}
