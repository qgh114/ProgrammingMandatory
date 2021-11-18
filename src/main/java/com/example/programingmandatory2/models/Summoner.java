package com.example.programingmandatory2.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

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

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "summoner")
    private Set<Champion> champions;

    @JsonIgnore
    @ManyToMany(mappedBy = "summoners", fetch = FetchType.LAZY)
    private List<Match> matches;


}
