package com.prototype;

import java.util.List;
import java.util.ArrayList;

public class BookShop implements Cloneable {
    // must implement Cloneable to clone...

    private String shopName;
    List<Book> books = new ArrayList<>();

    public String getShopName() {
        return this.shopName;
    }

    public void setShopName(String name) {
        this.shopName = name;
    }

    public List<Books> getBooks() {
        return this.books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    public void loadData() {
        // a pretend database call
        for (int i = 0; i < 10; i++) {
            Book b = new Book();
            b.setID(i);
            b.setName("Book " + i);
            getBooks().add(b);
        }
    }

    @Override
    public String toString() {
        return "Shop Name: " + this.shopName + " | Books: " + this.books;
    }

    // returns a shallow (aka "reference") copy
    /*
     * @Override
     * protected Object clone() throws CloneNotSuportedException {
     * return super.clone();
     * }
     */

    // creates a deep copy
    @Override
    protected BookShop clone() throws CloneNotSuportedException {
        BookShop shop = new BookShop();

        for (Book b : this.getBooks()) {
            shop.getBooks().add(b);
        }
        return shop;
    }

    // prevents us from creating a new class that calls the database again... just
    // copies the original

}
