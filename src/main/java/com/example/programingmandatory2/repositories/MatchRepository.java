package com.example.programingmandatory2.repositories;

import com.example.programingmandatory2.models.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, Long> {
}
