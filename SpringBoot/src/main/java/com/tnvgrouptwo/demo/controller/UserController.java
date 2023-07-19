package com.tnvgrouptwo.demo.controller;

import com.tnvgrouptwo.demo.model.User;
import com.tnvgrouptwo.demo.model.UserLogin;
import com.tnvgrouptwo.demo.model.UserRegister;
import com.tnvgrouptwo.demo.model.UserUpdate;
import com.tnvgrouptwo.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //CRUD operations (Create Read Update Delete)

    @PostMapping("/")
    public String addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable("id") int id) {
        return userService.getUser(id);
    }

    @GetMapping("/search/username/{partialUsername}")
    public List<User> searchUserByUsername(@PathVariable("partialUsername") String partialUsername) {
        return userService.searchUserByUsername(partialUsername);
    }

    @GetMapping("/search/username/{partialUsername}/mail/{partialMail}")
    public List<User> searchUserByUsername(@PathVariable("partialUsername") String partialUsername,
                                           @PathVariable("partialMail") String partialMail) {
        return userService.searchUserByUsernameAndEmail(partialUsername, partialMail);
    }

    //allUsers - GET
    @GetMapping("/")
    public Iterable<User> allUsers() {
        return userService.allUsers();
    }

    @GetMapping("/teams/{team}")
    public Iterable<User> allTeamUsers(@PathVariable("team") String team) {
        return userService.allTeamUser(team);
    }

    //updateUser - PUT
    @PutMapping("/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody UserUpdate user) {
        return userService.updateUser(id, user);
    }

    //deleteUser - DELETE
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        return userService.deleteUser(id);
    }


    //TODO: registration(User user) (~ createUser)
    @PostMapping("/register")
    public String registerUser(@RequestBody UserRegister user){
        return userService.registerUser(user);
    }

    //TODO: login(String username, String password) -> OK o KO
    @PostMapping("/login")
    public String loginUser(@RequestBody UserLogin user){
        return userService.loginUser(user);
    }

}
