package com.petworld.MawandPaw.repo;

import com.petworld.MawandPaw.model.UserRegister;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepo extends MongoRepository<UserRegister,String> {
}
