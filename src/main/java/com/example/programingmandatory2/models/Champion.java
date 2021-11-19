package com.example.programingmandatory2.models;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@Table(name="champions")
public class Champion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String role;

    @Column
    private String moderate;

    @Column
    private String image;

    @Nullable
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "summoner_id")
    private Summoner summoner;



}
