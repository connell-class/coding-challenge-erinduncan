package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class GroceryItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;

	@Column
	private String name;

	@Column
	private float price;

	@Enumerated(EnumType.STRING)
	private GroceryCategory category;

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getName() {
		return name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public void setName(String name) {
		this.name = name;
	}

	public GroceryItem(int itemId, String name, float price, GroceryCategory category) {
		super();
		this.itemId = itemId;
		this.name = name;
		this.price = price;
		this.category = category;
	}

	public GroceryCategory getCategory() {
		return category;
	}

	public void setCategory(GroceryCategory category) {
		this.category = category;
	}

	public GroceryItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "GroceryItem [itemId=" + itemId + ", name=" + name + ", price=" + price + ", category=" + category + "]";
	}

}
