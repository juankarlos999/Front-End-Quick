import React from 'react';
import useFetch from '../hooks/usefetch';
import {Form, InputGroup, FormGroup, Label, Col, Input, Row, Button} from 'reactstrap'
import { Control, LocalForm, Errors} from "react-redux-form";

const Selector = ({refSelect}) => {
    var  {data, loading, error} = useFetch('https://api.fulldevs.software/vehicles');
    if (error){
        return(
            <div><p>Error!!!</p></div>
        )
    }
    if (loading){
        return(
            <div><p>Loading!!!</p></div>
        )
    }
    if (data) {
        return (
            <>
            <Control.select ref={refSelect} model=".type" id='type' name='type' className="form-control m-2 autoComInp" 
            validators={{
                required: (val) => val !== 'Vehicle Type'
            }}>
                <option disabled hidden selected>Vehicle Type</option>
                {data.vehicles.map((value, index)=><option key={index}>{value.name}</option>)}
            </Control.select>
            <Errors className="errorForm"
                model=".type"
                className="text-danger"
                show="touched"
                messages={{
                    required: 'Please select a Valid vehicle type'
                }}
            />
            </>
        )
    }
}

export default Selector;