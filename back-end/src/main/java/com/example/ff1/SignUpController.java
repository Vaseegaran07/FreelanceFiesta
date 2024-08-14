package com.example.ff1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:5173")  // Corrected to match your frontend origin
public class SignUpController {

    @Autowired
    SignUpService sus;

    @Autowired
    SignUpRepo sur;

    @PostMapping("/reg")
    public ResponseEntity<SignUpEntity> registerUser(@RequestBody SignUpEntity data) {
        try {
            SignUpEntity registeredUser = sus.postData(data);
            return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<SignUpEntity> loginUser(@RequestBody SignUpEntity loginDetails) {
        try {
            SignUpEntity user = sur.findByEmail(loginDetails.getEmail());
            if (user != null && user.getPassword().equals(loginDetails.getPassword())) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/get")
    public ResponseEntity<List<SignUpEntity>> getData() {
        try {
            List<SignUpEntity> users = sus.getAllData();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    @GetMapping("/user/{id}")
    public ResponseEntity<SignUpEntity> getUserById(@PathVariable int id) {
        try {
            SignUpEntity user = sur.findById(id);
            if (user != null) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
