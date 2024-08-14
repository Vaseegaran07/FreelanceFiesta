package com.example.ff1;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ServiceRepository extends JpaRepository<Service, Long> {
    List<Service> findByUsername(String username);
}
