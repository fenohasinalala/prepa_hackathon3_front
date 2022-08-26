import axios from "axios";

export const postPutDeletRequest = (domain:string,endPoint:string,body:Object,id:number|null,post:boolean,put:boolean,finishUpdate:()=>void)=>{
    try {
        axios[post?"post":put?"put":"delete"](domain+endPoint+(id==null?"":"/"+id), body);
        const timer=setInterval(()=>{
          finishUpdate();
          console.log("It's activ");
          clearInterval(timer);
        },500)
      } catch (error) {
        console.log(error);
        const timer=setInterval(()=>{
          finishUpdate();
          console.log("It's activ");
          clearInterval(timer);
        },500)
      }


};