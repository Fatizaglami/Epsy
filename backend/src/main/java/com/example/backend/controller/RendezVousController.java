package com.example.backend.controller;


import com.example.backend.model.Appointment;
import com.example.backend.model.Patient;
import com.example.backend.model.RendezVous;
import com.example.backend.repository.RendezVousRepo;
import com.example.backend.service.RendezVousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.List;
import java.util.Map;

@RestController
public class RendezVousController {

    @Autowired
    private RendezVousService service;

    //unconfirmed appointment
    @RequestMapping("/rendezvous")
    public Map<Date, Patient> getRendezVousNotificationByDoctor(){
        String idDoctor = "doc@gmail.com";
        return service.getRendezVousNotificationParDoctor(idDoctor);
    }

    //appointment count for current month
    @RequestMapping("/appointmentcount")
    public Integer getAppointmentCountByDoctor(){
        String idDoctor = "doc@gmail.com";
        return service.getAppointmentCountByDoctor(idDoctor);
    }

    //increase for appointment count for current month
    @RequestMapping("/appointmentgrowth")
    public BigDecimal getAppointmentGrowthByDoctor(){
        String idDoctor = "doc@gmail.com";
        return service.getAppointmentGrowthByDoctor(idDoctor);
    }

    //the latest 4 new appointments
    @RequestMapping("/latestappointment")
    public List<Appointment> getLatestAppointmentByDoctor(){
        String idDoctor = "doc@gmail.com";
        return service.getLatestAppointmentByDoctor(idDoctor);
    }

}
