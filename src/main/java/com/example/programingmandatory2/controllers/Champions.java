package com.example.programingmandatory2.controllers;

import com.example.programingmandatory2.models.Champion;
import com.example.programingmandatory2.models.Summoner;
import com.example.programingmandatory2.repositories.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Champions {

    @Autowired
    ChampionRepository champions;

    @GetMapping("/champions")
    public Iterable<Champion> getChampions() {

        return champions.findAll();
    }


}
