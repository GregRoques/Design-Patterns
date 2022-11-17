package com.example;

public class YouTube {
    public static void main(String[] args) {
        Channel CuteCats = new Channel();
        Subscriber s1 = new Subscriber("Midnight");
        Subscriber s2 = new Subscriber("Callie");
        Subscriber s3 = new Subscriber("Lil' Nacheaux");
        Subscriber s4 = new Subscriber("Gizmo");
        Subscriber s5 = new Subscriber("Grey Cat");

        CuteCats.subscribe(s1);
        CuteCats.subscribe(s2);
        CuteCats.subscribe(s3);
        CuteCats.subscribe(s4);
        CuteCats.subscribe(s5);

        s1.subscribeToChannel(CuteCats);
        s2.subscribeToChannel(CuteCats);
        s3.subscribeToChannel(CuteCats);
        s4.subscribeToChannel(CuteCats);
        s5.subscribeToChannel(CuteCats);

        CuteCats.uploadVideo("Playing with String");
    }
}