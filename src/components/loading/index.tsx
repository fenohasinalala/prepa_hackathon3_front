import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Spinner from 'react-bootstrap/esm/Spinner';
import { backgroundColor } from '../../constants';
import './load.css'

const Load = (FinishLoading:()=>void) => {
    return(
        <>
            <div className="realBackground">
                <button className={"btn "+backgroundColor+ " activBouton"}  onClick={()=>{FinishLoading()}}>
                <span className="spinner-border spinner-border-sm"></span>
                Loading..
                </button>
            </div>
        </>
    )

};

export default Load;