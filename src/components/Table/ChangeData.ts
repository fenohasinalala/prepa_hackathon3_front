import { book } from "../../interfaces";



export const changeData: (
    data:book[],
    tri:string|null
    )=>book[] = (data,tri)=>{
        if (tri=="title") {
            data.sort((a,b)=>{
                if (a[tri]<b[tri])
                return -1;
             if (a[tri]>b[tri])
                return 1;
             return 0;
            })
        }
    return data;
};
