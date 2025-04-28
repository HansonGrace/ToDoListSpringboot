package com.example.taskmanager.controller;

import com.example.taskmanager.entity.User;
import com.example.taskmanager.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * user controller for managing user entities
 * 
 * handles incomming http requests for user-related operations
 */
@RestController // web api controller
@RequestMapping("/api/users") // base url for user-related endpoints

public class UserController {

    private final UserService userService;

    /**
     * constructor based dependency injection
     * for starting the user service
     */
    @Autowired // injects the user service
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // api endpoints
    // register a new user & POST request to /api/users/register
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.saveUser(user); // save the user and return
    }

}