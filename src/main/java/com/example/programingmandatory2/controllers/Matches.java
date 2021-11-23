package com.example.programingmandatory2.controllers;

import com.example.programingmandatory2.models.Match;
import com.example.programingmandatory2.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Matches {


    @Autowired
    private MatchRepository matches;

    @GetMapping("/matches")
    public Iterable<Match> getMatches() {

        return matches.findAll();
    }


    @GetMapping("/matches/{id}")
    public Match getMatchById(@PathVariable Long id) {
        return matches.findById(id).get();
    }


    @PostMapping("/matches")
    public Match addMatch(@RequestBody Match newMatch) {
        newMatch.setId(2L);
        return matches.save(newMatch);
    }


    @PutMapping("/matches/{id}")
    public String updateMatchById(@PathVariable Long id, @RequestBody Match matchToUpdateWith) {

        if (matches.existsById(id)){
            matchToUpdateWith.setId(id);
            matches.save(matchToUpdateWith);
            return "Match was created";
        }else {
            return "Match not found ";
        }
    }

    @PatchMapping("/matches/{id}")
    public String patchArtistById(@PathVariable Long id, @RequestBody Match matchesToUpdateWith){
        return matches.findById(id).map( foundMatch -> {
            // hvis artist som klienten skrive ikke er tom så indsæt
            if(matchesToUpdateWith.getGameResult() !=null) foundMatch.setGameResult(matchesToUpdateWith.getGameResult());
            if(matchesToUpdateWith.getDate() !=0) foundMatch.setDate(matchesToUpdateWith.getDate());
            if(matchesToUpdateWith.getKill()!=0) foundMatch.setKill(matchesToUpdateWith.getKill());
            if(matchesToUpdateWith.getDeath() != 0) foundMatch.setDeath(matchesToUpdateWith.getDeath());
            if(matchesToUpdateWith.getAssist() !=0) foundMatch.setAssist(matchesToUpdateWith.getAssist());
            matches.save(foundMatch);
            System.out.println(foundMatch);
            return "Match updated";
        }).orElse("not found");
    }


    @DeleteMapping("/matches/{id}")
    public void deleteArtistById(@PathVariable Long id){
        matches.deleteById(id);
    }
}

