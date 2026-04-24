package com.flatoys.service;

import com.flatoys.dto.LoginRequest;
import com.flatoys.dto.LoginResponse;
import com.flatoys.dto.RegisterRequest;
import com.flatoys.model.User;
import com.flatoys.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    
    @Transactional
    public LoginResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        
        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Senha incorreta");
        }
        
        return new LoginResponse(user);
    }
    
    @Transactional
    public LoginResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email já cadastrado");
        }
        
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword("123456"); // Default password
        user.setRole(User.UserRole.USER);
        
        user = userRepository.save(user);
        return new LoginResponse(user);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }
}
