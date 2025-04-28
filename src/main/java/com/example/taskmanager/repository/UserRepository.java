package com.example.taskmanager.repository;

// import user class
import com.example.taskmanager.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * UserRepository interface for managing User entities
 * This interface extends JpaRepository to provide CRUD operations for User
 * entities
 */
@Repository // spring data repo

public interface UserRepository extends JpaRepository<User, Long> {

    // query methods
    User findByUsername(String username);
}