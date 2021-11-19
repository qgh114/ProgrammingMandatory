package com.example.programingmandatory2.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (nullable = false)
    private Long id;

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
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
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
