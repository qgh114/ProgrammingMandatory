package com.example.programingmandatory2.models;

import lombok.Data;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;
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
    private String title;


    @Column(length=2000)
    private String blurb;

    @Column
    private String image;

    @Column
    private String tags;


    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Summoner summoner;


}
