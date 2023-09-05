package com.petworld.MawandPaw.repo;


import com.petworld.MawandPaw.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepo extends MongoRepository<Item,String> {
}
