package com.example.taskmanager.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

/**
 * Task entity class
 * 
 */

@Entity // marks JPA
@Table(name = "tasks") // specifies the name of the table in the database
public class Task {

    @Id // primary
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-incremented primary key
    private Long id;

    private String title;
    private String description;
    private String status;

    // link task to user backend
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // constructors
    public Task() {
    } // automation w/ spring boot

    // for manual creation of tasks
    public Task(String title, String description, String status) {
        this.title = title;
        this.description = description;
        this.status = status;
    }

}