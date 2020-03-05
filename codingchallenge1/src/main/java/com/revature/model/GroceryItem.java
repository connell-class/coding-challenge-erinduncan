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
	private int quantity;

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

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
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

	public GroceryItem(int itemId, String name, int quantity, GroceryCategory category) {
		super();
		this.itemId = itemId;
		this.name = name;
		this.quantity = quantity;
		this.category = category;
	}

	@Override
	public String toString() {
		return "GroceryItems [itemId=" + itemId + ", name=" + name + ", quantity=" + quantity + ", category=" + category
				+ "]";
	}

}
