package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // 必要に応じてカスタムクエリも追加できる
}