package com.example.programingmandatory2.models;

import lombok.Data;

import javax.persistence.*;
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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "summoner")
    private Set<Champion> champions;


}
