package com.example.taskmanager.service;

import com.example.taskmanager.entity.Task;
import com.example.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * this class is a service for managing tasks in the task manager application.
 * 
 */
@Service // spring service
public class TaskService {
    private final TaskRepository taskRepository; // repository for task entity

    @Autowired // injects the task repository
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // method to save a new task
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    // method to find tasks by user ID
    public List<Task> findTasksByUserId(Long userId) {
        return taskRepository.findByUserId(userId);
    }

    // method to find a task by title
    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }

    // method to delte a task by ID
    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

}
