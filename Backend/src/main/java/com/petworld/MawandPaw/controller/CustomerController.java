package com.petworld.MawandPaw.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// what the customer can do

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @PutMapping("/")
    public ResponseEntity<?> addItemToCart(){
        // To do
        return null;
    }
    @PostMapping("/{id}")
    public ResponseEntity<?> addToWatchLater(){
        // To do
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFromWatchLater(){
        // To do
        return null;
    }

    public ResponseEntity<?> feedbackOutOfFive(){
        // To do
        return null;
    }

    public ResponseEntity<?> payment(){
        // To do
        return null;
    }


}
