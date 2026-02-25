package com.example.backend.DTO;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class TaskCreateRequest {
    String title;
    private LocalDateTime createdAt;
    Boolean completed;
}
