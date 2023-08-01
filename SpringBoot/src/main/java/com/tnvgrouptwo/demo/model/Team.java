package com.tnvgrouptwo.demo.model;

import java.io.Serializable;

public class Team implements Serializable {
    private float red = 0;
    private float blu = 0;
    private boolean rEnabled = true;
    private boolean bEnabled = true;

    public Team() {
    }

    public boolean isrEnabled() {
        return rEnabled;
    }

    public void setREnabled(boolean rEnabled) {
        this.rEnabled = rEnabled;
    }

    public boolean isbEnabled() {
        return bEnabled;
    }

    public void setBEnabled(boolean bEnabled) {
        this.bEnabled = bEnabled;
    }

    public float getRed() {
        return red;
    }
    public void setRed(float red) {
        this.red = red;
    }
    public float getBlu() {
        return blu;
    }
    public void setBlu(float blu) {
        this.blu = blu;
    }
}
