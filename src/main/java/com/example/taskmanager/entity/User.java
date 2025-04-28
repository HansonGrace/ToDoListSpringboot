package com.example.taskmanager.entity;

import jakarta.persistence.*;

/**
 * User entity class
 * 
 * This class represents a user in the task manager application.
 * Each instance of User will be stored as a row in the table
 */

public class User {
    @Id // marks this field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-incremented primary key
    private Long id; // unique identifier for each user

    private String username;
    private String password;

    // constructors
    public User() {
    } // to create users automatically using spring boot

    // manual creation of users
    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

}