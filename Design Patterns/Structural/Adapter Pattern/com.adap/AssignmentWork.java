
package com.adap;

public class AssignmentWork {

    private Pen p;

    // sets the type of pen we are using (red, green, etc.)
    public void setP(Pen p) {
        this.p = p;
    }

    public void writeAssignment(String str) {
        p.write(str);
    }
}
