package com.toystore.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "toys")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Toy {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Código é obrigatório")
    @Column(nullable = false, unique = true)
    private String code;
    
    @NotBlank(message = "Descrição é obrigatória")
    @Column(nullable = false)
    private String description;
    
    @NotBlank(message = "Categoria é obrigatória")
    @Column(nullable = false)
    private String category;
    
    @NotBlank(message = "Marca é obrigatória")
    @Column(nullable = false)
    private String brand;
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @NotNull(message = "Valor é obrigatório")
    @Positive(message = "Valor deve ser positivo")
    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;
    
    @Column(columnDefinition = "TEXT")
    private String details;
    
    @Column(name = "is_featured")
    private Boolean isFeatured = false;
}
