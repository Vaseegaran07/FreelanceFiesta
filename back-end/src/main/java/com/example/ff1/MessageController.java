package com.example.ff1;


import com.example.ff1.Message;
import com.example.ff1.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @PostMapping
    public Message sendMessage(@RequestBody Message message) {
        return messageRepository.save(message);
    }
}