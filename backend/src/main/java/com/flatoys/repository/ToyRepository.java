package com.toystore.repository;

import com.toystore.model.Toy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ToyRepository extends JpaRepository<Toy, Long> {
    Optional<Toy> findByCode(String code);
    List<Toy> findByCategory(String category);
    List<Toy> findByIsFeaturedTrue();
    List<Toy> findByBrand(String brand);
    boolean existsByCode(String code);
}
