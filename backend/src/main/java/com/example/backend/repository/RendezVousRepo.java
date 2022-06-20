package com.example.backend.repository;

import com.example.backend.model.RendezVous;
import com.example.backend.model.RendezVousId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface RendezVousRepo extends JpaRepository<RendezVous, RendezVousId> {

    @Query("Select rv from RendezVous  rv join rv.doctor d where d.email = ?1 and rv.isConfirmed=true")
    List<RendezVous> getRendezVousNotificationByDoctor(String idDoctor);

    @Procedure
    Integer getAppointmentCountByDoctor(String idDoctor);

    @Procedure
    BigDecimal getAppointmentGrowthByDoctor(String idDoctor);


    @Query(nativeQuery = true, value = "select rv.* from rendez_vous rv, doctor d " +
            "where d.email=rv.doctor_email and d.email= :idDoctor " +
            "order by rv.date desc limit 2")
    List<RendezVous> getLatestAppointmentByDoctor(@Param("idDoctor") String idDoctor);
}
