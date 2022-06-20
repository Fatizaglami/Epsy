package com.example.backend.repository;

import com.example.backend.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface PatientRepo extends JpaRepository<Patient,String> {
    @Query("select p from Patient p join p.patientOfs e join e.doctor d where d.email=?1")
    List<Patient> findPatientByDoctor(String idDoctor);

    @Query("select p from Patient p join p.patientOfs e join e.doctor d " +
            "where d.email=?1 and concat(p.nom,' ',p.prenom) like %?2% ")
    List<Patient> findPatientByFullname(String idDoctor, String fullname);


    @Procedure
    Integer getPatientCountByDoctor(String idDoctor);

    @Procedure
    BigDecimal getPatientGrowthByDoctor(String idDoctor);

    @Query(nativeQuery = true,value = "select p.* from patient p, doctor d, patientof of " +
            "where of.doctor_email=d.email and of.patient_email=p.email " +
            "and d.email = :idDoctor " +
            "order by of.date_debut desc limit 4")
    List<Patient> getNewJoinedPatientsByDoctor(@Param("idDoctor") String idDoctor);
}
