package com.example.programingmandatory2.controllers;

import com.example.programingmandatory2.models.Summoner;
import com.example.programingmandatory2.repositories.SummonerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Summoners {
    @Autowired
    SummonerRepository summoners;


    @GetMapping("/summoners")
    public Iterable<Summoner> getSummoners() {

        return summoners.findAll();
    }
}
