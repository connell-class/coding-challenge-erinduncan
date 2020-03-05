package com.revature.dao;

import org.springframework.data.repository.CrudRepository;

import com.revature.model.GroceryList;

public interface GroceryListDao extends CrudRepository<GroceryList, Integer> {

}
