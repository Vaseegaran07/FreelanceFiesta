package com.example.ff1;

import java.util.Base64;

import jakarta.persistence.*;

@Entity
@Table(name = "services")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;
    private String subcategory;
    private String location;
    private String description;
    private String username;  // New field for storing the username

    @Lob
    @Column(name = "cover_image", columnDefinition = "LONGBLOB")
    private byte[] coverImage;

    @Lob
    @Column(name = "additional_image", columnDefinition = "LONGBLOB")
    private byte[] additionalImage;

    private Integer deliveryTime;
    private Integer revisionNumber;
    private Double price;
    private String serviceTitle;
    private String shortDescription;

    // Getters and setters...

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCoverImage() {
        if (this.coverImage != null) {
            String base64Image = Base64.getEncoder().encodeToString(this.coverImage);
            System.out.println("Base64 Cover Image: " + base64Image);
            return base64Image;
        }
        return null;
    }

    public void setCoverImage(byte[] coverImage) {
        this.coverImage = coverImage;
    }

    public String getAdditionalImage() {
        return this.additionalImage != null ? Base64.getEncoder().encodeToString(this.additionalImage) : null;
    }

    public void setAdditionalImage(byte[] additionalImage) {
        this.additionalImage = additionalImage;
    }

    public Integer getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Integer deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Integer getRevisionNumber() {
        return revisionNumber;
    }

    public void setRevisionNumber(Integer revisionNumber) {
        this.revisionNumber = revisionNumber;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getServiceTitle() {
        return serviceTitle;
    }

    public void setServiceTitle(String serviceTitle) {
        this.serviceTitle = serviceTitle;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}