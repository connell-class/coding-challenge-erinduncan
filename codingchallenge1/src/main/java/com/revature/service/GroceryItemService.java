package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.GroceryItemDao;
import com.revature.model.GroceryItem;

@Service
public class GroceryItemService {

	@Autowired
	GroceryItemDao gid;

	public void setGid(GroceryItemDao gid) {
		this.gid = gid;
	}

	public Iterable<GroceryItem> readAll() {
		return gid.findAll();
	}

	public GroceryItem findItemById(int id) {
		return gid.findById(id).get();
	}

	public GroceryItem insert(GroceryItem g) {
		return gid.save(g);
	}

	public GroceryItem update(GroceryItem g) {
		return gid.save(g);
	}

	public void updateItemById(int id) {
		GroceryItem gi = gid.findById(id).get();
		gid.save(gi);
	}

	public void delete(GroceryItem g) {
		gid.delete(g);
	}

	public void deleteItemById(int id) {
		GroceryItem gi = gid.findById(id).get();
		gid.delete(gi);
	}

}
