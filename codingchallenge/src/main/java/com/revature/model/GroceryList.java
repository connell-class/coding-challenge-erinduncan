package com.revature.model;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class GroceryList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int listId;
	
	private LocalDate date;

    private String description;

    @OneToMany(mappedBy = "groceryList" ,fetch = FetchType.LAZY)
    private Set<GroceryList> groceries;


    public GroceryList(LocalDate date, String description) {
        this.date = date;
        this.description = description;
    }


	public int getListId() {
		return listId;
	}


	public void setListId(int listId) {
		this.listId = listId;
	}


	public LocalDate getDate() {
		return date;
	}


	public void setDate(LocalDate date) {
		this.date = date;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Set<GroceryList> getGroceries() {
		return groceries;
	}


	public void setGroceries(Set<GroceryList> groceries) {
		this.groceries = groceries;
	}


	public GroceryList() {
		super();
		// TODO Auto-generated constructor stub
	}


	public GroceryList(int listId, LocalDate date, String description, Set<GroceryList> groceries) {
		super();
		this.listId = listId;
		this.date = date;
		this.description = description;
		this.groceries = groceries;
	}
    
    

}
