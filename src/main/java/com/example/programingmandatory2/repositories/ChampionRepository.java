package com.example.programingmandatory2.repositories;

import com.example.programingmandatory2.models.Champion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChampionRepository extends JpaRepository<Champion, Long> {
}
