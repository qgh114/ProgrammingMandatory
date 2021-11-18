package com.example.programingmandatory2.repositories;

import com.example.programingmandatory2.models.Summoner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SummonerRepository extends JpaRepository<Summoner, Long> {
}
