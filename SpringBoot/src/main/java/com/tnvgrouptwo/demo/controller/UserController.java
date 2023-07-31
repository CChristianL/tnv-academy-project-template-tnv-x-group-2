package com.tnvgrouptwo.demo.controller;

import com.tnvgrouptwo.demo.model.*;
import com.tnvgrouptwo.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200/")
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
    public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody UserUpdate user) {
        User userToUpdate = userService.updateUser(id, user);
        if (userToUpdate != null){
            return ResponseEntity.ok(userToUpdate);
        } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    @GetMapping("/distribution/team/members")
    public Team teamMembersPercentage() {
         Team team = userService.teamMembersPercentage();
        return team;
    }

    //deleteUser - DELETE
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        return userService.deleteUser(id);
    }


    //TODO: registration(User user) (~ createUser)
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody UserRegister user){
        User userToRegister = userService.registerUser(user);
        if (userToRegister != null) {
            return ResponseEntity.ok(userToRegister); // Login riuscito, restituisci l'oggetto User
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // Login fallito, restituisci 401 Unauthorized
        }
    }

    //TODO: login(String username, String password) -> OK o KO

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody UserLogin user) {
    User userTolog = userService.loginUser(user);
        if (userTolog != null) {
            return ResponseEntity.ok(userTolog); // Login riuscito, restituisci l'oggetto User
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // Login fallito, restituisci 401 Unauthorized
        }
    }

}
