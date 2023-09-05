package com.petworld.MawandPaw.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// AuthController is a class to handle login and register purpose

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @PostMapping()
    public ResponseEntity<?> register() {
        // To do
        return null;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login() {
        // To do
        return null;
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> resetPassword(){
        // To do
        return null;
    }

    @DeleteMapping
    public ResponseEntity<?> deleteCustomerById(){
        // To do
        return null;
    }

    @GetMapping
    public ResponseEntity<?> listAllCustomers(){
        // To do
        return null;
    }

}
