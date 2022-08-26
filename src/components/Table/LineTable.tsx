import axios from 'axios';
import { isEmptyArray } from 'formik';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { backgroundColor, APIUrl, variant } from '../../constants';
import { postPutDeletRequest } from '../../hoooks';
import { book, category } from '../../interfaces';
import Formulaire from '../formulaire';
import Load from '../loading';



interface props{
    idLine: any;
    item: book;
    actualisationAllData: () => void;
    bouttons:{name:string,method:(object:object)=>void}[]|null
    keFocus:[number, number | null, number | null][]
    takeVauleObjectByNumber:(n: [number, number | null, number | null], o: Object) => string
    dataCompose:category[]
  }

export const LigneList:React.FC<props> = (props) => {
    const[activPut,setActivPut]=useState<Boolean>(false)
    const idLine = props.idLine;
    const item = props.item;
    const bouttons = props.bouttons;
    const keFocus = props.keFocus;
    const takeVauleObjectByNumber = props.takeVauleObjectByNumber;



    const [activLoading,setActivLoading]= useState<boolean>(false)
    const finishLoadingt:()=>void = ()=>{
        props.actualisationAllData();
        const temer1 = setInterval(()=>{
            setActivUpdatePut(false);
            setActivLoading(false);
        },500)
    }
    const [activUpdatePut,setActivUpdatePut]= useState<boolean>(false)
    const finishUpdatPut:()=>void = ()=>{
        props.actualisationAllData();
        const temer1 = setInterval(()=>{
            setActivUpdatePut(false);
            setActivLoading(false);
        },500)
    }

    return (
        <>
            
            <tr id={""+item.idBook} key={item.idBook}>
                {keFocus.map((donne)=>{return(
                    <td>{""+takeVauleObjectByNumber(donne,item)}</td>
                )})}
                {((bouttons!=null))?
                    <td  className="center">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                            {bouttons.map((boutton)=>{return(
                                <button onClick={()=>{
                                    setActivLoading(true);
                                    /*boutton.method({data:item,finishLoadingt:finishLoadingt});*/
                                }} type="button" className={"btn btn-"+variant}>{boutton.name}</button>
                            )})}
                        </div>
                    </td>:<></>
                }
            </tr>
            {activUpdatePut?
            <Formulaire
              book = {item}
              id = {item.idBook}
              fermetur = {finishUpdatPut}
              dataCompose = {props.dataCompose}
              change = {4}
            />:<></>}

            {activLoading?Load(finishLoadingt):<></>}
        </>
    );
};


