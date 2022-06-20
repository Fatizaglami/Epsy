package com.example.backend.service;

import com.example.backend.model.Appointment;
import com.example.backend.model.Patient;
import com.example.backend.model.RendezVous;
import com.example.backend.repository.PatientRepo;
import com.example.backend.repository.RendezVousRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RendezVousService {

    @Autowired
    private RendezVousRepo rendezVousRepo;

    @Autowired
    private PatientRepo patientRepo;


    public Map<Date, Patient> getRendezVousNotificationParDoctor(String idDoctor){
        List<RendezVous> rendezVous = rendezVousRepo.getRendezVousNotificationByDoctor(idDoctor);

        Map<Date,Patient> results = new HashMap<>();

        for (RendezVous rv : rendezVous){
            results.put(rv.getId().getDate(), rv.getPatient());
        }
        return results;
    }

    public Integer getAppointmentCountByDoctor(String idDoctor){
        return rendezVousRepo.getAppointmentCountByDoctor(idDoctor);
    }

    public BigDecimal getAppointmentGrowthByDoctor(String idDoctor){
        return rendezVousRepo.getAppointmentGrowthByDoctor(idDoctor);
    }

    public List<Appointment> getLatestAppointmentByDoctor(String idDoctor){
        List<RendezVous> rendezVous = rendezVousRepo.getLatestAppointmentByDoctor(idDoctor);
        List<Appointment> appointments = new ArrayList<>();
        for(RendezVous rv: rendezVous){
           Appointment appointment= new Appointment();
           appointment.setRendezVous(rv);
           appointment.setPatient(rv.getPatient());
           appointments.add(appointment);
        }
        return  appointments;
    };


}
