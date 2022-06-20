package com.example.backend.controller;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Patient;
import com.example.backend.repository.PatientRepo;
import com.example.backend.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RequestMapping("/patients")
@RestController
public class PatientController {

    @Autowired
    PatientService service;
    @Autowired
    PatientRepo patientRepo;


    //patient list of doc
    @GetMapping("/patientof")
    public List<Patient> getPatientOf(){
        String idDoctor  = "doc@gmail.com";
        List<Patient> patients = service.findPatientByDoctor(idDoctor);
        return patients;
    }

    //search doc's patient by name or lastname
    @GetMapping("/search/{fullname}")
    public List<Patient> findPatientOfByName(@PathVariable String fullname){
        String email = "doc@gmail.com";
        return service.findPatientByFullname(email,fullname);
    }

    //patient counts for current month
    @GetMapping("/patientcount")
    public Integer findPatientOfByName(){
        String email = "doc2@gmail.com";
        return service.getPatientCountByDoctor(email);
    }

    //patient count increase(positive,negative)
    @GetMapping("/patientgrowth")
    public BigDecimal getPatientCountGrowthByDoctor(){
        String email = "doc2@gmail.com";
        return service.getPatientGrowthByDoctor(email);
    }

    //4 new joined patients
    @GetMapping("/newpatients")
    public List<Patient> newJoinedPatientsByDoctor(){
        String email = "doc2@gmail.com";
        return service.getNewJoinedPatientsByDoctor(email);
    }
    //get all patients
    @GetMapping
    public List<Patient> getAllPatients(){
        return patientRepo.findAll();
    }

    //add patient
    @PostMapping
    public Patient addPatient(@RequestBody Patient patient){
        return patientRepo.save(patient);
    }

    //get patient by email
    @GetMapping("/{email}")
    public ResponseEntity<Patient> getPatientById(@PathVariable String email){
        Patient patient = patientRepo.findById(email).orElseThrow(()->new ResourceNotFoundException("Patient not found"));

        return ResponseEntity.ok(patient);
    }
    //update patient

    @PutMapping("/{email}")
    public ResponseEntity<Patient> updatePatient(@PathVariable String email, @RequestBody Patient patientDetails){
        Patient patient = patientRepo.findById(email).orElseThrow(()->new ResourceNotFoundException("patient not found"));

        patient.setNom(patientDetails.getNom());
        patient.setPrenom(patientDetails.getPrenom());
        patient.setCin(patientDetails.getCin());
        patient.setSex(patientDetails.getSex());
        patient.setPassword(patientDetails.getPassword());
        patient.setSituation(patientDetails.getSituation());
        patient.setDateNaissance(patientDetails.getDateNaissance());
        patient.setTel(patientDetails.getTel());
        Patient updatedPatient = patientRepo.save(patient);
        return ResponseEntity.ok(updatedPatient);
    }
    // delete patient
    @DeleteMapping("/{email}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable String email){
        Patient patient = patientRepo.findById(email)
                .orElseThrow(() -> new ResourceNotFoundException("patient not exist with id :" + email));

        patientRepo.delete(patient);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
