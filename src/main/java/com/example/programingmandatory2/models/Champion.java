package com.example.programingmandatory2.models;

import lombok.Data;

import javax.persistence.*;

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

    @Column
    private String image;



}
