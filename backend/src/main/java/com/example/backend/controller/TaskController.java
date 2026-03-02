package com.example.backend.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.example.backend.DTO.TaskCreateRequest;
import com.example.backend.DTO.TaskUpdateRequest;
import com.example.backend.entity.Task;
import com.example.backend.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody TaskCreateRequest task) {
        return taskService.createTask(task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id,
            @RequestBody TaskUpdateRequest req) {
        return taskService.updateTask(id, req);
    }
}
