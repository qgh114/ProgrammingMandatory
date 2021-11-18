package com.example.programingmandatory2.models;

import com.fasterxml.jackson.annotation.JacksonAnnotation;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.jackson.Jacksonized;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name="summoners")
public class Summoner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private int summonerLevel;

    @Column
    private String image;

   //@JsonIgnore
    //public Summoner (){}

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "summoner")
    private Set<Champion> champions;

    @JsonIgnore
    @ManyToMany(mappedBy = "summoners", fetch = FetchType.LAZY)
    private List<Match> matches;


}
