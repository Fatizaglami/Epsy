package com.example.backend.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.sql.Date;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "rendez_vous")
public class RendezVous {

    @EmbeddedId
    private RendezVousId id = new RendezVousId();


    @ManyToOne
    @JsonIgnore
    @MapsId("idDoctor")
    private Doctor doctor;

    @ManyToOne
    @JsonIgnore
    @MapsId("idPatient")
    private Patient patient;

    private Boolean isConfirmed;
}
