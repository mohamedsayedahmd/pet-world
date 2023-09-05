package com.petworld.MawandPaw.service;

import com.petworld.MawandPaw.repo.ItemRepo;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private final ItemRepo itemRepo; // in order to give feedback

    public CustomerService(ItemRepo itemRepo) {
        this.itemRepo = itemRepo;
    }
}
