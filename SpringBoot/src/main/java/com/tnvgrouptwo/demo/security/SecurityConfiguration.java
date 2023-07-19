package com.tnvgrouptwo.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    /*@Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User
                .withUsername("user")
                .password(passwordEncoder.encode("user"))
                .roles("USER")
                .build();
        UserDetails admin = User
                .withUsername("admin")
                .password(passwordEncoder.encode("admin"))
                .roles("ADMIN")
                .build();
        return new InMemoryUserDetailsManager(user, admin);
    }*/

    @Bean
    public UserDetailsManager users(DataSource dataSource){
//      UserDetails user = User
//                .withUsername("user")
//                .password(passwordEncoder.encode("user"))
//                .roles("USER")
//                .build();
//        UserDetails admin = User
//                .withUsername("admin")
//                .password(passwordEncoder.encode("admin"))
//                .roles("ADMIN")
//                .build();
        JdbcUserDetailsManager judm = new JdbcUserDetailsManager(dataSource);
//            judm.setAuthoritiesByUsernameQuery("select username,authority "
//                    + "from authorities "
//                    + "where username = ?");
//            judm.setUsersByUsernameQuery("select username,password,enabled "
//                    + "from user "
//                   + "where username = ?");
//            judm.createUser(user);
//            judm.createUser(admin);
        return judm;
    }

    /**
     * Qui ho riscontrato un potenziale bug di cui vorrei parlarti, nel lanciare il programma così com'è
     * senza gli step by step fatti durante le lezioni, è impossibile avere degli admin e user preimpostati
     * ragion per cui per ovviare al problema ho scelto di dare permitAll alle chiamate per inserire un primo admin
     * con cui poi ragionare sul resto.
     * In alternativa ho pensato ad una register che se il db è vuoto registra il primo utente come admin.
     * Hai suggerimenti in merito?
     */


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(
                        auth -> auth.requestMatchers(HttpMethod.GET, "/users/**")
                                .permitAll()
                                 //hasAnyRole("USER","ADMIN")
                                .requestMatchers(HttpMethod.POST, "/users/")
                                .permitAll()
                                 //hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/users/**")
                                .permitAll()
                                 //hasRole("ADMIN")
                                .requestMatchers(HttpMethod.POST, "/users/register")
                                .permitAll()
                                .requestMatchers(HttpMethod.POST, "/users/login")
                                .permitAll()
                                .requestMatchers(HttpMethod.POST, "/users/logout")
                                .hasAnyRole("USER", "ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/users/**")
                                .permitAll()
                                 //hasRole("ADMIN")
                                .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return this.passwordEncoder;
    }
}
