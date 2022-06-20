package com.example.backend.service;


import com.example.backend.model.Patient;
import com.example.backend.repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    @Autowired
    PatientRepo patientRepo;

    public List<Patient> getPatients(){
        List<Patient> patients = new ArrayList<>();
        patientRepo.findAll().forEach(patients::add);
        return patients;
    }

    public Optional<Patient> getPatient(String email){
        return patientRepo.findById(email);
    }

    public void ajouterPatient(Patient patient){
        patientRepo.save(patient);
    }

    public void modifierPatient(Patient patient){
        patientRepo.save(patient);
    }

    public void supprimerPatient(Patient patient){
        patientRepo.delete(patient);
    }

    public List<Patient> findPatientByDoctor(String idDoctor){
        List<Patient> patients = patientRepo.findPatientByDoctor(idDoctor);
        return patients;
    }

    public List<Patient> findPatientByFullname(String email,String fullname){
        List<Patient> patients = patientRepo.findPatientByFullname(email,fullname);
        return patients;
    }

    public Integer getPatientCountByDoctor(String idDoctor){
        return patientRepo.getPatientCountByDoctor(idDoctor);
    }

    public BigDecimal getPatientGrowthByDoctor(String idDoctor){
        return patientRepo.getPatientGrowthByDoctor(idDoctor);
    }

    public List<Patient> getNewJoinedPatientsByDoctor(String idDoctor){
        return patientRepo.getNewJoinedPatientsByDoctor(idDoctor);
    }
}
