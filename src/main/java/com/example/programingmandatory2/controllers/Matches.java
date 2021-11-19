package com.example.programingmandatory2.controllers;

import com.example.programingmandatory2.models.Champion;
import com.example.programingmandatory2.models.Match;
import com.example.programingmandatory2.repositories.ChampionRepository;
import com.example.programingmandatory2.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Matches {


    @Autowired
    MatchRepository matches;

    @GetMapping("/matches")
    public Iterable<Match> getMatches() {

        return matches.findAll();
    }
}
