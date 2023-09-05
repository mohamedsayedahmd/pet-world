package com.petworld.MawandPaw.service;

import com.petworld.MawandPaw.controller.exception.ItemAlreadyExistsException;
import com.petworld.MawandPaw.model.Item;
import com.petworld.MawandPaw.repo.ItemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ItemService {
    private final ItemRepo itemRepo;

    @Autowired
    public ItemService(ItemRepo itemRepo) {
        this.itemRepo = itemRepo;
    }
    // implementation of all endpoint

    public void createNewItem(Item item) {
        Optional<Item> byId = itemRepo.findById(item.getId());
        if(!byId.isPresent()) {
            Item newItem = new Item();
            newItem.setId(item.getId());
            newItem.setItemName(item.getItemName());
            newItem.setItemDescription(item.getItemDescription());
            newItem.setDate(LocalDateTime.now());
            newItem.setImageLink(item.getImageLink());
            newItem.setFeedback(item.getFeedback());

            itemRepo.save(newItem);
            System.out.println("Item created successfully");
        }else {
            throw new ItemAlreadyExistsException("Item with ID " + item.getId() + " already exists.");
        }

    }
}
