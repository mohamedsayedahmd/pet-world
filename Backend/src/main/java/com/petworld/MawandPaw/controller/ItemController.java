package com.petworld.MawandPaw.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// This controller was made for the admin
@RestController
@RequestMapping("api/v1/item")
public class ItemController {

    @GetMapping("/{id}")
    public ResponseEntity<?> getItemById(){
        return null;
    }

    @PostMapping()
    public ResponseEntity<?> addNewItem(){
        // To do
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteItem(){
        // To do
        return null;
    }
    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editItemDetails(){
        // To do
        return null;
    }

    @GetMapping("/get-all-items")
    public ResponseEntity<?> listAllItems(){
        // To do
        return null;
    }

}
