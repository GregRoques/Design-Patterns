package com.example;

public interface Observer {

    void update(String title);

    void subscribeToChannel(Channel ch);
}
