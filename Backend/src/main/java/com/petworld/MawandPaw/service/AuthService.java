package com.petworld.MawandPaw.service;

import com.petworld.MawandPaw.repo.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UsersRepo usersRepo;

    @Autowired
    public AuthService(UsersRepo usersRepo) {
        this.usersRepo = usersRepo;
    }

    // implementation of all endpoint

}
