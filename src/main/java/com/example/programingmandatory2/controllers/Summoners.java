package com.example.programingmandatory2.controllers;

import com.example.programingmandatory2.models.Summoner;
import com.example.programingmandatory2.repositories.SummonerRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Summoners {
    @Autowired
    SummonerRepository summoners;


    @GetMapping("/summoners")
    public Iterable<Summoner> getSummoners() {

        return summoners.findAll();
    }


    @PostMapping("/summoners")
    public Summoner addSummoner(@RequestBody Summoner newSummoner) {
        // don't allow the client to overwrite the id
        newSummoner.setId(null);
        return summoners.save(newSummoner);
    }

}
