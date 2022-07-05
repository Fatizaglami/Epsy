

DROP TABLE IF EXISTS  doctor ;
CREATE TABLE IF NOT EXISTS  doctor  (
   email  varchar(250) NOT NULL,
   cin  varchar(255) DEFAULT NULL,
   nom  varchar(255) DEFAULT NULL,
   password  varchar(255) DEFAULT NULL,
   prenom  varchar(255) DEFAULT NULL,
   specialite  varchar(255) DEFAULT NULL,
   tel  varchar(255) DEFAULT NULL,
  PRIMARY KEY ( email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table  doctor 
--

INSERT INTO  doctor  ( email ,  cin ,  nom ,  password ,  prenom ,  specialite ,  tel ) VALUES
('doc2@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL),
('doc@gmail.com', NULL, NULL, '$2a$10$ijQ2naRyVBJQm1lGj9g8pu9k1pzqS/kU/6QEJy7xzdbRj4C5VI4K2', NULL, NULL, NULL),
('hiba@gmail.com', '', '', '$2a$10$ijQ2naRyVBJQm1lGj9g8pu9k1pzqS/kU/6QEJy7xzdbRj4C5VI4K2', '', '', '');

DROP TABLE IF EXISTS  patient ;
CREATE TABLE IF NOT EXISTS  patient  (
                                         email  varchar(250) NOT NULL,
                                         cin  varchar(255) DEFAULT NULL,
                                         date_naissance  varchar(255) DEFAULT NULL,
                                         nom  varchar(255) DEFAULT NULL,
                                         password  varchar(255) DEFAULT NULL,
                                         prenom  varchar(255) DEFAULT NULL,
                                         sex  varchar(255) DEFAULT NULL,
                                         situation  varchar(255) DEFAULT NULL,
                                         tel  varchar(255) DEFAULT NULL,
                                         PRIMARY KEY ( email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table  patient
--

INSERT INTO  patient  ( email ,  cin ,  date_naissance ,  nom ,  password ,  prenom ,  sex ,  situation ,  tel ) VALUES
                                                                                                                     ('hiba@gmail.com', '', NULL, '', '$2a$10$AR8Q1Bn8ReR4xRAruSxM7.6pk5oOxqUP4052okJN26J/8PuXwPkpe', '', '', '', ''),
                                                                                                                     ('patient1@gmail.com', NULL, NULL, 'Hiba', NULL, 'nizar', NULL, NULL, NULL),
                                                                                                                     ('patient2@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
                                                                                                                     ('patient4@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
                                                                                                                     ('patient5@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
                                                                                                                     ('patient@gmail.com', ' ', NULL, 'Hiba', NULL, ' nizar', NULL, NULL, NULL);


DROP TABLE IF EXISTS  patientof ;
CREATE TABLE IF NOT EXISTS  patientof  (
                                           date_debut  date DEFAULT NULL,
                                           patient_email  varchar(255) NOT NULL,
                                           doctor_email  varchar(255) NOT NULL,
                                           KEY  FK2hpxqwlfddgytdqgfdtkkupnm  ( patient_email ),
                                           KEY  FK3kksk5r0jopd4m76bhlg4pfyp  ( doctor_email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table  patientof
--

INSERT INTO  patientof  ( date_debut ,  patient_email ,  doctor_email ) VALUES
                                                                            ('2022-05-08', 'patient@gmail.com', 'doc@gmail.com'),
                                                                            ('2022-05-09', 'patient@gmail.com', 'doc2@gmail.com'),
                                                                            ('2022-05-09', 'patient@gmail.com', 'doc2@gmail.com'),
                                                                            ('2022-05-09', 'patient5@gmail.com', 'doc2@gmail.com'),
                                                                            ('2022-06-09', 'patient4@gmail.com', 'doc2@gmail.com'),
                                                                            ('2022-06-22', 'hiba@gmail.com', 'doc@gmail.com'),
                                                                            ('2022-05-04', 'patient1@gmail.com', 'doc@gmail.com'),
                                                                            ('2022-06-22', 'hiba@gmail.com', 'doc@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table  rendez_vous
--

DROP TABLE IF EXISTS  rendez_vous ;
CREATE TABLE IF NOT EXISTS  rendez_vous  (
                                             date  date DEFAULT NULL,
                                             is_confirmed  bit(1) DEFAULT NULL,
                                             patient_email  varchar(255) NOT NULL,
                                             doctor_email  varchar(255) NOT NULL,
                                             KEY  FKdrr6evor45tggpjp20ohmiyg1  ( doctor_email ),
                                             KEY  FK9uaah7guos1xbqxgdg0i0qquy  ( patient_email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table  rendez_vous
--

INSERT INTO  rendez_vous  ( date ,  is_confirmed ,  patient_email ,  doctor_email ) VALUES
                                                                                        ('2022-05-04', b'1', 'patient1@gmail.com', 'doc@gmail.com'),
                                                                                        ('2022-06-04', b'1', 'patient1@gmail.com', 'doc@gmail.com');

DROP TABLE IF EXISTS  admin ;
CREATE TABLE IF NOT EXISTS  admin  (
                                       email  varchar(30) NOT NULL,
                                       nom  varchar(20) NOT NULL,
                                       prenom  varchar(20) NOT NULL,
                                       cin  varchar(20) NOT NULL,
                                       password  varchar(20) NOT NULL,
                                       tel  varchar(20) NOT NULL,
                                       PRIMARY KEY ( email )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS  user ;
CREATE TABLE IF NOT EXISTS  user  (
                                      password  varchar(255) DEFAULT NULL,
                                      role  varchar(255) DEFAULT NULL,
                                      username  varchar(255) NOT NULL,
                                      UNIQUE KEY  UK_sb8bbouer5wak8vyiiy4pf2bx  ( username )
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table  user
--

INSERT INTO  user  ( password ,  role ,  username ) VALUES
                                                        ('$2a$10$ijQ2naRyVBJQm1lGj9g8pu9k1pzqS/kU/6QEJy7xzdbRj4C5VI4K2', 'doctor', 'doc@gmail.com'),
                                                        ('$2a$10$ijQ2naRyVBJQm1lGj9g8pu9k1pzqS/kU/6QEJy7xzdbRj4C5VI4K2', 'patient', 'hiba@gmail.com'),
                                                        ('$2a$10$AR8Q1Bn8ReR4xRAruSxM7.6pk5oOxqUP4052okJN26J/8PuXwPkpe', 'patient', 'patient@gmail.com');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table  patientof
--
ALTER TABLE  patientof
    ADD CONSTRAINT  FK2hpxqwlfddgytdqgfdtkkupnm  FOREIGN KEY ( patient_email ) REFERENCES  patient  ( email ),
    ADD CONSTRAINT  FK3kksk5r0jopd4m76bhlg4pfyp  FOREIGN KEY ( doctor_email ) REFERENCES  doctor  ( email );

--
-- Contraintes pour la table  rendez_vous
--
ALTER TABLE  rendez_vous
    ADD CONSTRAINT  FK9uaah7guos1xbqxgdg0i0qquy  FOREIGN KEY ( patient_email ) REFERENCES  patient  ( email ),
    ADD CONSTRAINT  FKdrr6evor45tggpjp20ohmiyg1  FOREIGN KEY ( doctor_email ) REFERENCES  doctor  ( email );


DROP TRIGGER IF EXISTS  DoctorTableDeleteTrigger ;

CREATE TRIGGER  DoctorTableDeleteTrigger  AFTER DELETE ON  doctor  FOR EACH ROW delete from user
where user.username=old.email;



DROP TRIGGER IF EXISTS  PatientTableUpdateTrigger ;
DELIMITER $$
CREATE TRIGGER  PatientTableUpdateTrigger  AFTER UPDATE ON  patient  FOR EACH ROW BEGIN
    update user
    set user.username=new.email ,user.password=new.password
    where user.username=old.email;
end $$

DELIMITER ;
DROP TRIGGER IF EXISTS  PatientTabledeleteTrigger ;
DELIMITER $$
CREATE TRIGGER  PatientTabledeleteTrigger  AFTER DELETE ON  patient  FOR EACH ROW BEGIN
    delete from user
    where user.username=old.email;
end $$
DELIMITER ;
DROP TRIGGER IF EXISTS  DoctorTableUpdateTrigger ;
DELIMITER $$
CREATE TRIGGER  DoctorTableUpdateTrigger  AFTER UPDATE ON  doctor  FOR EACH ROW BEGIN
    update user
    set user.username=new.email ,user.password=new.password
    where user.username=old.email;
end $$
DELIMITER ;

DROP TRIGGER IF EXISTS  AdminTableDeleteTrigger ;
DELIMITER $$
CREATE TRIGGER  AdminTableDeleteTrigger  AFTER DELETE ON  admin  FOR EACH ROW BEGIN
    delete from user
    where user.username=old.email;
end $$
DELIMITER ;

DROP TRIGGER IF EXISTS  AdminTableUpdateTrigger ;
DELIMITER $$
CREATE TRIGGER  AdminTableUpdateTrigger  AFTER UPDATE ON  admin  FOR EACH ROW BEGIN
    update user
    set user.username=new.email,
        user.password=new.password
    where user.username=old.email;
end $$

DELIMITER ;
DROP TRIGGER IF EXISTS  addPatientOf ;
DELIMITER $$
CREATE TRIGGER  addPatientOf  AFTER UPDATE ON  rendez_vous  FOR EACH ROW BEGIN
    IF(old.is_Confirmed=false and new.is_confirmed=true) then
        insert into patientof(patientof.doctor_email,patientof.patient_email,patientof.date_debut)
        values(new.doctor_email,new.patient_email,new.date);
    end if;
END $$
DELIMITER ;

DROP TRIGGER IF EXISTS  AdminTableInsertTrigger ;
DELIMITER $$
CREATE TRIGGER  AdminTableInsertTrigger  AFTER INSERT ON  admin  FOR EACH ROW BEGIN
    insert into user(username,password,role) values(new.email,new.password,'admin');
END $$
DELIMITER ;
DROP TRIGGER IF EXISTS  DoctorTableInsertTrigger ;
DELIMITER $$
CREATE TRIGGER  DoctorTableInsertTrigger  AFTER INSERT ON  doctor  FOR EACH ROW BEGIN insert into user(username,password,role) values(new.email,new.password,'doctor');
end $$
DELIMITER ;
 

DROP TRIGGER IF EXISTS  PatientTableInsertTrigger ;
DELIMITER $$
CREATE TRIGGER  PatientTableInsertTrigger  AFTER INSERT ON  patient  FOR EACH ROW BEGIN
insert into user(username,password,role) values(new.email,new.password,'patient');
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE acceptAppointment (IN  idDoctor  VARCHAR(250), IN  idPatient  VARCHAR(250), IN  date  DATE)  BEGIN
    update rendez_vous
    set rendez_vous.is_confirmed=true
    where rendez_vous.doctor_email=idDoctor and rendez_vous.patient_email=idPatient and rendez_vous.date=date;
end $$
DELIMITER ;
DELIMITER $$
CREATE PROCEDURE  denyAppointment  (IN  idDoctor  VARCHAR(250), IN  idPatient  VARCHAR(250), IN  date  DATE)  BEGIN
    delete from rendez_vous
    where rendez_vous.doctor_email=idDoctor and rendez_vous.patient_email=idPatient and rendez_vous.date=date;
end $$
DELIMITER ;


CREATE PROCEDURE findPatientOfByIdPatient  (IN  idPatient  VARCHAR(250))  select pf.* from patientof pf
                                                                          where pf.patient_email=idPatient;

DELIMITER $$
CREATE PROCEDURE getAppointmentCountByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select count from (select year(rv.date) as year, month(rv.date)as month,count(*) as count from rendez_vous rv, doctor d where d.email=rv.doctor_email group by d.email, year(rv.date), month(rv.date), rv.is_confirmed having d.email=idDoctor and rv.is_confirmed=true) t where year=year(sysdate()) and month=month(sysdate());
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE  getAppointmentGrowthByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select percentage from(select year,month,cpt, ((cpt-(lead(cpt) over (order by year, month DESC)))/(lead(cpt) over (order by year, month DESC)))*100 as percentage
                           from (select year(rv.date) as year, month(rv.date) as month,count(*) as cpt from doctor d, rendez_vous rv
                                 where d.email=rv.doctor_email and d.email=idDoctor
                                 group by year(rv.date), month(rv.date) , rv.is_confirmed
                                 having rv.is_confirmed=true
                                 order by year(rv.date), month(rv.date) DESC
                                ) t) ta
    where year=year(sysdate()) and month=month(sysdate());
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE  getInvitationCountByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select count from (select year(rv.date) as year, month(rv.date)as month,count(*) as count from rendez_vous rv, doctor d where d.email=rv.doctor_email group by d.email, year(rv.date), month(rv.date) having d.email=idDoctor) t where year=year(sysdate()) and month=month(sysdate());
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getInvitationGrowthByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select percentage from(select year,month,cpt, ((cpt-(lead(cpt) over (order by year, month DESC)))/(lead(cpt) over (order by year, month DESC)))*100 as percentage
                           from (select year(rv.date) as year, month(rv.date) as month,count(*) as cpt from doctor d, rendez_vous rv
                                 where d.email=rv.doctor_email and d.email=idDoctor
                                 group by year(rv.date), month(rv.date)
                                 order by year(rv.date), month(rv.date) DESC
                                ) t) ta
    where year=year(sysdate()) and month=month(sysdate());
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE  getLatestAppointmentByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select rv.date as date, p.nom as nom, p.prenom as prenom, rv.is_confirmed as status from rendez_vous rv, doctor d, patient p
    where d.email=rv.doctor_email and rv.patient_email=p.email
      and d.email=idDoctor
    order by rv.date desc limit 4;
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE  getPatientCountByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select count from (select year(pf.date_debut) as year, month(pf.date_debut)as month,count(*) as count from patientof pf, doctor d where d.email=pf.doctor_email group by d.email, year(pf.date_debut), month(pf.date_debut) having d.email=idDoctor) t where year=year(sysdate()) and month=month(sysdate());
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getPatientCountChartByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select year, month , (cpt+(lag(cpt) over (order by year, month))) as patientCount from (select year(pf.date_debut) as year, month(pf.date_debut) as month ,count(*) as cpt from patientof pf, doctor d
                                                                                            where d.email=pf.doctor_email and d.email=idDoctor
                                                                                            group by year(pf.date_debut), month(pf.date_debut)
                                                                                           ) t
    order by year, month DESC
    limit 9;
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getPatientGrowthByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select percentage from(select year,month,cpt, ((cpt-(lead(cpt) over (order by year, month DESC)))/(lead(cpt) over (order by year, month DESC)))*100 as percentage
                           from (select year(pf.date_debut) as year, month(pf.date_debut) as month,count(*) as cpt from doctor d, patientof pf
                                 where d.email=pf.doctor_email and d.email=idDoctor
                                 group by year(pf.date_debut), month(pf.date_debut)
                                 order by year(pf.date_debut), month(pf.date_debut) DESC
                                ) t) ta
    where year=year(sysdate()) and month=month(sysdate());
end $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE getRendezVousNotificationByDoctor  (IN  idDoctor  VARCHAR(250))  BEGIN
    select rv.date as date, p.nom as nom, p.prenom as prenom,
           p.email as idPatient, d.email as idDoctor from rendez_vous rv, patient p, doctor d
    where rv.patient_email=p.email and rv.doctor_email= d.email
      and d.email=idDoctor and rv.is_confirmed=false;
end $$
DELIMITER ;

CREATE PROCEDURE saveAppointment  (IN  idDoctor  VARCHAR(250), IN  idPatient  VARCHAR(250), IN  date  DATE)  insert into rendez_vous(rendez_vous.doctor_email, rendez_vous.patient_email,rendez_vous.date,rendez_vous.is_confirmed)
                                                                                                             values(idDoctor,idPatient,date, false);


--
-- Déclencheurs  admin
--


-- --------------------------------------------------------

--
-- Structure de la table  doctor
--
COMMIT;

