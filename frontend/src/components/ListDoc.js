import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import DoctorService from '../services/DoctorService'

const ListDoc = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {

        getDoctors();
    }, [])

    const getDoctors = () => {
        DoctorService.getDoctors().then((response) => {
            setDoctors(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDoctor = (doctorId) => {
       DoctorService.deleteDoctor(doctorId).then((response) =>{
        getDoctors();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className='listDoc'>
        <h2 className='text-center'>Doctors List</h2>
        
            <button className='btn btn-outline-primary mb-2'><a  href="/add-doctor" >Add Doctor</a></button>
        
        <div className='row'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th>Cin</th>
                        <th>Password</th>
                        <th>Specialite</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map(
                            doctor =>
                            <tr key={doctor.email}>
                                <td>{doctor.nom}</td>
                                <td>{doctor.prenom}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.tel}</td>
                                <td>{doctor.password}</td>
                                <td>{doctor.cin}</td>
                                <td>{doctor.specialite}</td>
                                <td>
                                <Link className="btn btn-info" to={`/update-doctor/${doctor.email}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteDoctor(doctor.email)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default ListDoc