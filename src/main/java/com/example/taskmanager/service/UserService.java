package com.example.taskmanager.service;

import com.example.taskmanager.entity.User;
import com.example.taskmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * UserService class for managing User entities
 * 
 * 
 */
@Service // spring service

public class UserService {
    private final UserRepository userRepository; // repository for user entity

    @Autowired // injects the user repository
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // method to save a new user
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}
