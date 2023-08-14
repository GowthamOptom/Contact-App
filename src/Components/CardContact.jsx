import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import UpdateContact from "./UpdateContactForm";
import deletecontact from "../redux/action/deleteContact";

export default function CardContact(props) {
    const dispatch = useDispatch();

    const DeleteContact = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text:"You want to delete this!",
            icon:'warning',
            showCancelButton : true,
            confirmButtonColor:"#3085D6",
            cancelButtonColor :"#d33",
            confirmButtonText :'Yes ,Delete it!'    
        })
        .then((result)=>{
            if(result.isConfirmed) {
                dispatch(deletecontact(id))
            }
        })
    }

    return (
        <div className="card d-flex shadow-sm mt-5">
            <div className="box">
                <div className="content">
                    <h2>{props.contact.id}</h2>
                    <h3>{props.contact.name}</h3>
                    <p>{props.contact.email}</p>
                    <p>{props.contact.phonenumber}</p>
                    <p>Category: {props.contact.category}</p>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <Link to={`/detail/${props.contact.id}`}>
                    <button className="btn btn-dark">Detail</button>
                </Link>
                <UpdateContact idContact={props.contact.id}/>
                <button className="btn btn-dark" onClick={() => DeleteContact(props.contact.id)}>Delete</button>
            </div>
        </div>
    )
    
}