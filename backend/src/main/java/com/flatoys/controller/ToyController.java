package com.toystore.controller;

import com.toystore.model.Toy;
import com.toystore.service.ToyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/toys")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ToyController {
    
    private final ToyService toyService;
    
    @GetMapping
    public ResponseEntity<List<Toy>> getAllToys() {
        return ResponseEntity.ok(toyService.getAllToys());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getToyById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(toyService.getToyById(id));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Toy>> getToysByCategory(@PathVariable String category) {
        return ResponseEntity.ok(toyService.getToysByCategory(category));
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<Toy>> getFeaturedToys() {
        return ResponseEntity.ok(toyService.getFeaturedToys());
    }
    
    @GetMapping("/brand/{brand}")
    public ResponseEntity<List<Toy>> getToysByBrand(@PathVariable String brand) {
        return ResponseEntity.ok(toyService.getToysByBrand(brand));
    }
    
    @PostMapping
    public ResponseEntity<?> createToy(@Valid @RequestBody Toy toy) {
        try {
            Toy createdToy = toyService.createToy(toy);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdToy);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateToy(@PathVariable Long id, @Valid @RequestBody Toy toy) {
        try {
            Toy updatedToy = toyService.updateToy(id, toy);
            return ResponseEntity.ok(updatedToy);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteToy(@PathVariable Long id) {
        try {
            toyService.deleteToy(id);
            return ResponseEntity.ok().body("Brinquedo excluído com sucesso");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
