package com.example.ff1;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SignUpRepo extends JpaRepository<SignUpEntity,Integer>{

	SignUpEntity findByEmail(String email);
	
	SignUpEntity findById(int id);

}
