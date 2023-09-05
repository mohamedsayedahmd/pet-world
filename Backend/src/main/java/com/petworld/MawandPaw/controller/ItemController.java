package com.petworld.MawandPaw.controller;

import com.petworld.MawandPaw.model.Item;
import com.petworld.MawandPaw.repo.ItemRepo;
import com.petworld.MawandPaw.service.ItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

// This controller was made for the admin
@RestController
@RequestMapping("api/v1/item")
public class ItemController {

    private final ItemRepo itemRepo;
    private final ItemService itemService;

    public ItemController(ItemRepo itemRepo, ItemService itemService) {
        this.itemRepo = itemRepo;
        this.itemService = itemService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getItemById(){
        return null;
    }

    @PostMapping()
    public ResponseEntity<?> addNewItem(@RequestBody Item item) {
        // To do
        itemService.createNewItem(item);
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteItem() {
        // To do
        return null;
    }
    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editItemDetails() {
        // To do
        return null;
    }

    @GetMapping("/get-all-items")
    public ResponseEntity<?> listAllItems() {
        // To do
        return null;
    }

}
