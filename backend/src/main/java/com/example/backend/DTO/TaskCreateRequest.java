package com.example.backend.DTO;

import lombok.Data;

@Data
public class TaskCreateRequest {
    String title;
    Boolean completed;
}
