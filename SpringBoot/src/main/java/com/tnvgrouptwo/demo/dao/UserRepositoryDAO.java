package com.tnvgrouptwo.demo.dao;

import com.tnvgrouptwo.demo.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    public List<User> findByUsernameContains(String partialUsername);
    public List<User> findByUsernameContainsAndEmailContains(String partialUsername, String partialMail);
    public boolean existsByUsername(String username);
    public User findByUsername(String username);
    public User saveAndFlush(User user);
    public Iterable<User> findByTeam(String team);
}
