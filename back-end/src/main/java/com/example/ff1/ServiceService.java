package com.example.ff1;
	
	import org.springframework.beans.factory.annotation.Autowired;
	
	import java.util.List;
	
	@org.springframework.stereotype.Service
	public class ServiceService {
	
	    @Autowired
	    private ServiceRepository serviceRepository;
	
	    public Service saveService(com.example.ff1.Service service) {
	        return serviceRepository.save(service);
	    }
	
	    public List<Service> getAllServices1() {
	        return serviceRepository.findAll();
	    }
	
	    public Service getServiceById(Long id) {
	        return serviceRepository.findById(id).orElse(null);
	    }
	
	    public void deleteService(Long id) {
	        serviceRepository.deleteById(id);
	    }
	    
	    
	}