package com.tnvgrouptwo.demo.service;

import com.tnvgrouptwo.demo.dao.UserRepositoryDAO;
import com.tnvgrouptwo.demo.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    UserRepositoryDAO userDAO;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }

    public String addUser(User user) {
        if (user.getPassword() == null) {
            user.generateDefaultPassword();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User result = userDAO.save(user);
        if (user != null) {
            return "Utente salvato correttamente";
        } else {
            return "Errore nel salvataggio dell'utente";
        }
    }

    public User registerUser(UserRegister user) {

        if (userDAO.existsByUsername(user.getUsername())){
            return null;
        }

        User userStillNotRegistred = new User(); //User da costruire per la registrazione.

        userStillNotRegistred.setTeam(user.getTeam());
        userStillNotRegistred.setUsername(user.getUsername());
        //Setting del nuovo User basato sui dati in ingresso
        userStillNotRegistred.setEmail(user.getEmail());
        userStillNotRegistred.setPassword(passwordEncoder.encode(user.getPassword()));
        userStillNotRegistred.setEnabled(true);

        Authority userStillNotRegistereAuthorities = new Authority();
        //Autorizzazioni da costruire per lo user da registrare

        userStillNotRegistereAuthorities.setUser(userStillNotRegistred);
        //Setting delle autorizzazioni del nuovo user
        userStillNotRegistereAuthorities.setUsername(user.getUsername());
        userStillNotRegistereAuthorities.setAuthority("ROLE_USER");

        userStillNotRegistred.setAuthorities(Collections.singleton(userStillNotRegistereAuthorities));
        //inserimento delle autorizzazioni nel nuovo user
        //Ho usato Collections.singleton perché mi permette di creare un set con un unico oggetto.
        //Considerato che raramente la registrazione consente immediati ruoli da admin ho optato per questa soluzione.

        userDAO.save(userStillNotRegistred);
        return userStillNotRegistred;
    }

    public Optional<User> getUser(int id) {
        return userDAO.findById(id);
    }

    public Iterable<User> allUsers() {
        return userDAO.findAll();
    }

    public User updateUser(int id, UserUpdate user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Optional<User> userId = userDAO.findById(id);
        User userToUpdate = userId.get();

        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setPassword(user.getPassword());

        userDAO.save(userToUpdate);

        if (user != null) { //CONTROLLO DA RENDERE PIU PERFORMANTE
            return userToUpdate;
        } else {
            return null;
        }
    }

    public Iterable<User> allTeamUser(String team) {
        return userDAO.findByTeam(team);
    }

    public String deleteUser(int id) {
        User user = userDAO.findById(id).orElse(null);
        if (user != null) {
            userDAO.delete(user);
            return "Utente cancellato correttamente";
        } else {
            return "Utente non trovato!";
        }
    }

    public List<User> searchUserByUsername(String partialUsername) {
        return userDAO.findByUsernameContains(partialUsername);
    }

    public List<User> searchUserByUsernameAndEmail(String partialUsername, String partialMail) {
        return userDAO.findByUsernameContainsAndEmailContains(partialUsername, partialMail);
    }

public User loginUser(UserLogin user) {
    User temp = userDAO.findByUsername(user.getUsername());
    if (temp != null && passwordEncoder.matches(user.getPassword(), temp.getPassword())) {
        return temp; // Restituisci l'oggetto User
    }
    return null; // Restituisci null per indicare il fallimento del login
}

public Team teamMembersPercentage() {
    float red = 0;
    float blu = 0;

    Team output = new Team(); //Viene creato un oggetto Team seguendo il suo model

    Iterable<User> userIterable = userDAO.findAll();

    for (User user : userIterable) {
        String team = user.getTeam();
        if(team != null) {
            if (team.equalsIgnoreCase("atene")) { //ignore case nel caso ci siano errori
                blu++; //conta gli utenti del team
            } else if (team.equalsIgnoreCase("sparta")) {
                red++;
            }
        }
    }
    output.setBlu(blu);
    output.setRed(red);

    float total = blu + red;
    float tenPercent = total / 10; //Per il calcolo percentile, non so se è definibile magic number

    if (blu > red ){
        float dif = blu - red;
        if(dif > tenPercent){
            output.setBEnabled(false);
        }
    } else{
        float dif = red - blu;
        if(dif > tenPercent){
            output.setREnabled(false);
        }
    }

    return output;
}

}
