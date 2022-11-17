package com.prototype;

public class Demo {
    public static void main(String[] args) throws CloneNotSupportedException {
        Bookshop bs = new BookShop();
        bs.setShopName("Greg's Bad-Ass Books in Metairie");
        bs.loadData();

        // will use a good bit of memory to make the load data call again
        /*
         * Bookshop bs1 = new BookShop();
         * bs1.setShopName("Midnight's Book Shop in Kenner");
         * bs1.loadData();
         */

        // instead...
        Bookshop bs1 = bs.clone(); // creates a deep copy
        bs.getBooks.remove(2);
        bs1.setShopName("Midnight's Book Shop in Kenner");

        System.out.println(bs);
        System.out.println(bs1);
    }
}