package com.example.programingmandatory2.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "mathces")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
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





}
