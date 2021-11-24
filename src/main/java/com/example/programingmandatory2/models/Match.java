package com.example.programingmandatory2.models;

import com.example.programingmandatory2.controllers.Summoners;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;


@Data
@Table(name="matches")
@Entity
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column
    private String name;

    @Enumerated(value = EnumType.STRING)
    @Column
    private GameResult gameResult;

    @Column
    private int date;

    @Column
    private int kill;

    @Column
    private int death;

    @Column
    private int assist;


    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "match", cascade = CascadeType.ALL)
    private Set<Summoner> summoners;





}
