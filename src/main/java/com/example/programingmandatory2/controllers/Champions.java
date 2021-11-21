package com.example.programingmandatory2.controllers;

import com.example.programingmandatory2.models.Champion;
import com.example.programingmandatory2.models.Summoner;
import com.example.programingmandatory2.repositories.ChampionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Champions {

    @Autowired
    ChampionRepository champions;

    @GetMapping("/champions")
    public Iterable<Champion> getChampions() {

        return champions.findAll();
    }

    @PostMapping("/champions")
    public Champion addChampion(@RequestBody Champion newChampion) {
        // don't allow the client to overwrite the id
        newChampion.setId(null);
        return champions.save(newChampion);
    }


}
