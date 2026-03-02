package com.example.backend.service;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.DTO.TaskCreateRequest;
import com.example.backend.DTO.TaskUpdateRequest;
import com.example.backend.entity.Task;
import com.example.backend.repository.TaskRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
@Transactional
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task createTask(TaskCreateRequest newTask) {
        Task task = new Task();
        task.setTitle(newTask.getTitle());
        task.setCreatedAt(newTask.getCreatedAt() != null ? newTask.getCreatedAt() : java.time.LocalDateTime.now());
        task.setCompleted(false);
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public Task updateTask(Long id, TaskUpdateRequest req) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Task not found with id: " + id));
        task.setCompleted(req.getCompleted());
        return taskRepository.save(task);
    }
}