package com.example.ff1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;
    
    @Autowired
    private ServiceService serviceService;

    // Create a new service
    @PostMapping
    public ResponseEntity<Service> createService(
            @RequestParam String title,
            @RequestParam String category,
            @RequestParam String subcategory,
            @RequestParam String location,
            @RequestParam String description,
            @RequestParam String serviceTitle,
            @RequestParam String shortDescription,
            @RequestParam Integer deliveryTime,
            @RequestParam Integer revisionNumber,
            @RequestParam Double price,
            @RequestParam String username,
            @RequestParam(required = false) MultipartFile coverImage,
            @RequestParam(required = false) MultipartFile uploadImage
    ) throws IOException {
        // Create a new Service object and set its properties
        Service service = new Service();
        service.setTitle(title);
        service.setCategory(category);
        service.setSubcategory(subcategory);
        service.setLocation(location);
        service.setDescription(description);
        service.setServiceTitle(serviceTitle);
        service.setShortDescription(shortDescription);
        service.setDeliveryTime(deliveryTime);
        service.setRevisionNumber(revisionNumber);
        service.setPrice(price);
        service.setUsername(username);

        // Set cover image if provided
        if (coverImage != null && !coverImage.isEmpty()) {
            service.setCoverImage(coverImage.getBytes());
        }

        // Set additional image if provided
        if (uploadImage != null && !uploadImage.isEmpty()) {
            service.setAdditionalImage(uploadImage.getBytes());
        }

        // Save the service to the repository and return the saved entity
        return ResponseEntity.ok(serviceRepository.save(service));
    }

    // Fetch services by username if provided, otherwise return all services
    @GetMapping
    public List<Service> getAllServices1(@RequestParam(required = false) String username) {
        if (username != null) {
            return serviceRepository.findByUsername(username);
        }
        return serviceRepository.findAll();
    }
    
    @GetMapping("/gigs/{id}")
    public ResponseEntity<Service> getGigById(@PathVariable Long id) {
    	Service gig = serviceService.getServiceById(id);
        return ResponseEntity.ok(gig);
    }


    // Delete a service by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        if (serviceRepository.existsById(id)) {
            serviceRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Fetch all services
    @GetMapping("/all")
    public List<Service> getAllServices() {
        return serviceRepository.findAll();
    }
}