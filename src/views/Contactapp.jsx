import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

//action
import getAllContact from '../redux/action/getAllContact';

// components
import CardContact from "../Components/CardContact";
import Loading from "../Components/Loading";

export default function ContactApp() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loadingReducer.loading);
    const contacts = useSelector(state => state.contactReducer.allContact);

    useEffect(() => {
        dispatch(getAllContact())
    }, [])

    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    {
                        loading ?
                        <Loading />
                        :
                        contacts.length === 0 ?
                        <div className="text-center m-2 p-4 border border-dark rounded"><span className="text-dark">Data Not Found</span></div>
                        :
                        contacts.map((contact) =>{
                            return(
                                <div key={contact.id} className="col-md-3 p-1">
                                    <CardContact contact={contact}/>    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}