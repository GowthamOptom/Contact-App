import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

// action
import detailContact from "../redux/action/getDetailContact";

//components
import CardContact from "../Components/CardContact"

export default function DetailContact() {
    const dispatch = useDispatch();
    const params = useParams();

    const contact = useSelector(state=>state.contactReducer.detailContact)

    useEffect(() => {
        dispatch(detailContact(params.id))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="w-50">
                        <CardContact contact={contact} fromDetail={true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}