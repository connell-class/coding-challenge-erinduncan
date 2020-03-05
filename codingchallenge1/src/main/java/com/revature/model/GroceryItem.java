package com.revature.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class GroceryItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;

	private String name;

	private float price;

	@Enumerated(EnumType.STRING)
	private GroceryCategory category;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "grocery_list_id")
    private GroceryList groceryList;

	public GroceryItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GroceryItem(int itemId, String name, float price, GroceryCategory category, GroceryList groceryList) {
		super();
		this.itemId = itemId;
		this.name = name;
		this.price = price;
		this.category = category;
		this.groceryList = groceryList;
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public GroceryCategory getCategory() {
		return category;
	}

	public void setCategory(GroceryCategory category) {
		this.category = category;
	}

	public GroceryList getGroceryList() {
		return groceryList;
	}

	public void setGroceryList(GroceryList groceryList) {
		this.groceryList = groceryList;
	}
	


}
