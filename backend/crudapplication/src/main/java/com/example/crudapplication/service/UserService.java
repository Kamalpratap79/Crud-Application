package com.example.crudapplication.service;

import com.example.crudapplication.entity.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


public interface UserService {

    public User addUser(User user);

    public List<User> getUsers();

    public User getUser(long userId);

    public User updateUser(User user);

    public User deleteUser(long userId);
}
