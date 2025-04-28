package com.example.taskmanager.controller;

import com.example.taskmanager.entity.Task;
import com.example.taskmanager.service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class TaskController {

    private final TaskService taskService;

    // constructor based dependency injection

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // api endpoints
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.saveTask(task);
    }

    // get all tasks for a user
    // GET request to /api/tasks/user/{userId}
    public List<Task> getTasksByUserId(@PathVariable Long userId) {
        // grabs userID from the path variable and passes it to the service layer
        return taskService.findTasksByUserId(userId);
    }
}