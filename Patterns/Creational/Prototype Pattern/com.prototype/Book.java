package com.prototype;

public class Book {
    private int bookID;
    private String bookName;

    public int getID() {
        return this.bookID;
    }

    public void setID(int id) {
        this.bookID = id;
    }

    public String getName() {
        return this.bookName;
    }

    public void setName(String name) {
        this.bookName = name;
    }

    @Override
    public String toString(){
        return "Book Name: " + this.bookName " | Book ID: " + this.bookID;
    }
}
