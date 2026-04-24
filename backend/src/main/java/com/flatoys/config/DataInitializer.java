package com.flatoys.config;

import com.flatoys.model.User;
import com.flatoys.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    
    private final UserRepository userRepository;
    
    @Override
    public void run(String... args) {
        // Create test users if they don't exist
        if (userRepository.count() == 0) {
            // Admin user
            User admin = new User();
            admin.setName("Administrador");
            admin.setEmail("admin@toystore.com");
            admin.setPassword("admin123");
            admin.setRole(User.UserRole.ADMIN);
            userRepository.save(admin);
            
            // Regular user
            User user = new User();
            user.setName("Usuário Teste");
            user.setEmail("usuario@toystore.com");
            user.setPassword("user123");
            user.setRole(User.UserRole.USER);
            userRepository.save(user);
            
            System.out.println("✓ Usuários de teste criados:");
            System.out.println("  Admin - Email: admin@flatoys.com | Senha: admin123");
            System.out.println("  User  - Email: usuario@flatoys.com | Senha: user123");
        }
    }
}
