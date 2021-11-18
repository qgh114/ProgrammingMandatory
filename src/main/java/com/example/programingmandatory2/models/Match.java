package com.example.programingmandatory2.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Enumerated(value = EnumType.STRING)
    @Column
    private GameResult gameResult;

    @Column
    private String summonerName;

    @Column
    private String summonerChampion;

    @Column
    private int date;

    @Column
    private int kill;

    @Column
    private int death;

    @Column
    private int assist;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "matches_summoners",

            joinColumns = {
                    @JoinColumn(name = "matches_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "summoners_id", referencedColumnName = "id",
                            nullable = true, updatable = true)
            }

    )
    private List<Summoner> summoners;





}
