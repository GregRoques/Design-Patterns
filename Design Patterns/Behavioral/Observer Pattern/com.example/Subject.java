package com.example;

public interface Subject {
    void subscribe(Subscribe sub);

    void unsubscribe(Subscribe sub);

    void notifySubscribers();

    void uploadVideo(String title);
}
