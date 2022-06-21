package com.example.backend.controller;


import com.example.backend.model.*;
import com.example.backend.service.RendezVousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@CrossOrigin("*")
@RestController
public class RendezVousController {

    @Autowired
    private RendezVousService service;

    //unconfirmed appointment
    @RequestMapping("/rendezvous")
    public List<IAppointmentNotification> getRendezVousNotificationByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getRendezVousNotificationByDoctor(idDoctor);
    }

    //appointment count for current month
    @RequestMapping("/appointmentcount")
    public List<ICount> getAppointmentCountByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getAppointmentCountByDoctor(idDoctor);
    }

    //increase for appointment count for current month
    @RequestMapping("/appointmentgrowth")
    public List<IGrowthPercentage> getAppointmentGrowthByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getAppointmentGrowthByDoctor(idDoctor);
    }

    //appointment count for current month
    @RequestMapping("/invitationcount")
    public List<ICount> getInvitationCountByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getInvitationCountByDoctor(idDoctor);
    }

    //increase for appointment count for current month
    @RequestMapping("/invitationgrowth")
    public List<IGrowthPercentage> getInvitationGrowthByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getInvitationGrowthByDoctor(idDoctor);
    }

    //the latest 4 new appointments
    @RequestMapping("/latestappointment")
    public List<IAppointment> getLatestAppointmentByDoctor(Authentication auth){
        MyUserDetails user = (MyUserDetails) auth.getPrincipal();
        String idDoctor = user.getUsername();
        return service.getLatestAppointmentByDoctor(idDoctor);
    }

    @RequestMapping("/denyappointment")
    public void denyAppointment(@RequestBody Appointment appointment){
        service.denyAppointment(appointment);
    }

    @RequestMapping("/acceptappointment")
    public void acceptAppointment(@RequestBody Appointment appointment){
        service.acceptAppointment(appointment);
    }


}
