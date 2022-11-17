package com.example;

public class Subscriber implements Observer {
    private String name;
    private Channel channel = new Channel();

    @Override
    public Subscriber(String name) {
        super();
        this.name = name;
    }

    @Override
    public void update(String title) {
        System.out.println("Hey " + name + ", a new Video, " + title + " has been uploaded.");
    }

    @Override
    public void subscribeToChannel(Channel ch) {
        this.channel = ch;
    }
}