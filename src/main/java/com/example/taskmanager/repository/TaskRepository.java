package com.example.taskmanager.repository;

import com.example.taskmanager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * interface TaskRepository for managing Task entities
 * 
 */
@Repository // spring data repo
public interface TaskRepository extends JpaRepository<Task, Long> {
    // query methods
    List<Task> findByUserId(Long userId);

    Task findByTitle(String title);

    List<Task> findByStatus(String status);
}