import axios from "axios";

export const getRequest = (domain:string,endPoint:string,setValue:React.Dispatch<React.SetStateAction<Object>>,page:number,pageSize:number,finishUpdate:()=>void)=>{
    try {
        axios({
            url: domain+endPoint,
          })
            .then((response) => {
                setValue(response.data);
                finishUpdate();
            }).catch((error) => {
              console.log("error in GET COCTAIL :");
              console.log(error);
              finishUpdate();
            })
      } catch (error) {
        console.log(error);
        finishUpdate();
      }
};