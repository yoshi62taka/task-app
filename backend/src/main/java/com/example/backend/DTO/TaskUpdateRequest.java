package com.example.backend.DTO;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class TaskUpdateRequest {
    String title;
    private LocalDateTime createdAt;
    Boolean completed;
}
