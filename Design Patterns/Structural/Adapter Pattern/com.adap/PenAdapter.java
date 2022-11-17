package com.adap;

import com.Callie.BluePen;

public class PenAdapter implements Pen {

    BluePen pp = new BluePen();

    @Override
    public void write(String str) {
        pp.mark(str);
    }

}
