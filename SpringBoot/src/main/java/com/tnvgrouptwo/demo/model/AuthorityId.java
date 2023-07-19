package com.tnvgrouptwo.demo.model;

import java.io.Serializable;

public class AuthorityId implements Serializable {
    private String email;

    private String authority;

    public AuthorityId() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }
}
