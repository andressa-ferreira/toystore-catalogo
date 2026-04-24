package com.flatoys.service;

import com.flatoys.model.Toy;
import com.flatoys.repository.ToyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ToyService {
    
    private final ToyRepository toyRepository;
    
    public List<Toy> getAllToys() {
        return toyRepository.findAll();
    }
    
    public Toy getToyById(Long id) {
        return toyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Brinquedo não encontrado"));
    }
    
    public List<Toy> getToysByCategory(String category) {
        return toyRepository.findByCategory(category);
    }
    
    public List<Toy> getFeaturedToys() {
        return toyRepository.findByIsFeaturedTrue();
    }
    
    public List<Toy> getToysByBrand(String brand) {
        return toyRepository.findByBrand(brand);
    }
    
    @Transactional
    public Toy createToy(Toy toy) {
        if (toyRepository.existsByCode(toy.getCode())) {
            throw new RuntimeException("Código já existe");
        }
        return toyRepository.save(toy);
    }
    
    @Transactional
    public Toy updateToy(Long id, Toy toyDetails) {
        Toy toy = getToyById(id);
        
        // Check if code is being changed and if it already exists
        if (!toy.getCode().equals(toyDetails.getCode()) && 
            toyRepository.existsByCode(toyDetails.getCode())) {
            throw new RuntimeException("Código já existe");
        }
        
        toy.setCode(toyDetails.getCode());
        toy.setDescription(toyDetails.getDescription());
        toy.setCategory(toyDetails.getCategory());
        toy.setBrand(toyDetails.getBrand());
        toy.setImageUrl(toyDetails.getImageUrl());
        toy.setPrice(toyDetails.getPrice());
        toy.setDetails(toyDetails.getDetails());
        toy.setIsFeatured(toyDetails.getIsFeatured());
        
        return toyRepository.save(toy);
    }
    
    @Transactional
    public void deleteToy(Long id) {
        Toy toy = getToyById(id);
        toyRepository.delete(toy);
    }
}
