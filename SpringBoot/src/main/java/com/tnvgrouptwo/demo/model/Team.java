package com.tnvgrouptwo.demo.model;

import java.io.Serializable;

public class Team implements Serializable {
    private int red = 0;
    private int blu = 0;
    private boolean rEnabled = true;
    private boolean bEnabled = true;

    public Team() {
    }

    public boolean isrEnabled() {
        return rEnabled;
    }

    public void setrEnabled(boolean rEnabled) {
        this.rEnabled = rEnabled;
    }

    public boolean isbEnabled() {
        return bEnabled;
    }

    public void setbEnabled(boolean bEnabled) {
        this.bEnabled = bEnabled;
    }

    public int getRed() {
        return red;
    }
    public void setRed(int red) {
        this.red = red;
    }
    public int getBlu() {
        return blu;
    }
    public void setBlu(int blu) {
        this.blu = blu;
    }
}
