import axios from "axios";
import { error } from "console";

export const postPutDeletRequest = (domain:string,endPoint:string,body:Object,id:number|null,post:boolean,put:boolean,finishUpdate:()=>void)=>{
    try {
        axios[post?"post":put?"put":"delete"](domain+endPoint+(id==null?"":"/"+id), body).then(()=>{finishUpdate();}).catch((e)=>{finishUpdate()})
      } catch (error) {
        console.log(error);
        
      }


};