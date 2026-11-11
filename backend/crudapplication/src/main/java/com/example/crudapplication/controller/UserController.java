package com.example.crudapplication.controller;

import com.example.crudapplication.entity.User;
import com.example.crudapplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public User addUser(@RequestBody User user){
        return this.userService.addUser(user);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return this.userService.getUsers();
    }
}
