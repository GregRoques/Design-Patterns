package com.example;

import java.util.List;
import java.util.ArrayList;

public class Channel implements Subject {
    private String title;
    private List<Subscriber> subs = new ArrayList<>();

    @Override
    public void subscribe(Subscribe sub) {
        if (!subs.contains(sub)) {
            subs.add(sub);
        }
    }

    @Override
    public void unsubscribe(Subscribe sub) {
        if (subs.contains(sub)) {
            subs.remove(sub);
        }
    }

    @Override
    public void notifySubscribers() {
        for (Subscriber sub : subs) {
            sub.update(this.title);
        }
    }

    @Override
    public void uploadVideo(String title) {
        this.title = title;
        notifySubscribers();
    }
}
