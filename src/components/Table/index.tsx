import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { backgroundColor, newBook, APIUrl } from "../../constants";
import { category, book } from "../../interfaces";
import Formulaire from "../formulaire";
import Load from "../loading";
import Arrow from "./Arrow";
import { LigneList } from "./LineTable";
import HorizontalPagination from "./Pagination";
import "./style.css";











interface props {
  items: book[];
  actualisationAllData:() => void;
  setActivUpdat: React.Dispatch<React.SetStateAction<boolean>>;
  colloneName: string[]
  keFocus:[number, number | null, number | null][]
  bouttons:{name:string,method:(object:object)=>void}[]|null
  dataCompose:category[]
  title:string
}

export const TableConstructor: React.FC<props> = (props) => {
  const [valuNumbur, setValuNumbur] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  
  const [activUpdatePost,setActivUpdatePost]= useState<boolean>(false)
  const finishUpdatPost:()=>void = ()=>{const timer=setInterval(()=>{setActivUpdatePost(false);clearInterval(timer)},300); actualisationAllData()}





  const takeVauleObjectByNumber:(n: [number, number | null, number | null], o: Object) => string = (n:[number,number|null,number|null],o:Object)=>{
    if (n[1]==null&&n[2]==null) {
      const value = ""+(Object.entries(o)[n[0]])[1];
      return value;
    }
    else if (n[1]!=null&&n[2]==null) {
      const i = Object.entries(o)[n[0]][1];
      const value =""+(Object.entries(i)[n[1]])[1];
      return value;
    }
    else if (n[1]!=null&&n[2]!=null) {
      const i:undefined|any = Object.entries(o)[n[0]][1];
      if (i!=undefined) {
        const g:undefined|any = Object.entries(i)[n[1]][1];
        if (g!=undefined) {
          const value = ""+(Object.entries(g)[n[2]])[1]
          return value;
        }
      }
    } return ""
  }

  const takeKeyObjectByNumber:(n: [number, number | null, number | null], o: Object) => string = (n:[number,number|null,number|null],o:Object)=>{
    if (n[1]==null&&n[2]==null) {
      const value =""+(Object.keys(o)[n[0]]);
      return value;
    }
    else if (n[1]!=null&&n[2]==null) {
      const i = Object.entries(o)[n[0]][1];
      const value =""+(Object.keys(i)[n[1]])[1];
      return value;
    }
    else if (n[1]!=null&&n[2]!=null) {
      const i:undefined|any = Object.entries(o)[n[0]][1];
      if (i!=undefined) {
        const g:undefined|any = Object.entries(i)[n[1]][1];
        if (g!=undefined) {
          const value = ""+(Object.keys(g)[n[2]])[1]
          return value;
        }
      }
    } return ""
  }


  const [activTri,setActivTri]=useState<boolean[]>([]);
  const [activLoading,setActivLoading]=useState<boolean>(true);
  const finishLoadingt = ()=>{setActivLoading(false)};
  const [dataBook, setDataBook] = useState<book[]>([newBook]);
  const [loagBook, setLoagBook] = useState<number>(0);
  useEffect(() => {
    setActivLoading(true)
    axios({
      url: APIUrl+"/books"+"?"+"page="+(page-1)+"&page_size="+valuNumbur,
    })
      .then((response) => {
        setDataBook(response.data);
        console.log(response.data);
        console.log(dataBook==[newBook]);
        
        console.log("SUCSSSSSESSSSSS");
        setActivLoading(false);
      })
      .catch((error) => {
        console.log("error in GET Books :");
        console.log(error);
      });
  }, [loagBook,page,valuNumbur])

  const actualisationAllData =()=>{setLoagBook(loagBook+1);console.log("UPDATEEEEEEEEEEEEEEEEEEEEEEEEE");};







  


  const [tri, setTri] = useState("");
  let items = [newBook];

    items = dataBook;

  const colloneName: string[] = props.colloneName;
  const keFocus:[number, number | null, number | null][] = props.keFocus
  const [bouttons] = useState(props.bouttons);







  


 










  return (
    <div className="d-flex flex-column mb-3 ForcedFisplayColone">
      <h2 className="titleCoctail"> {props.title} </h2>
      <div className="dataTable-header p-2">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5" onClick={() => setValuNumbur(5)}>
                5
              </option>
              <option value="10" onClick={() => setValuNumbur(10)} selected>
                10
              </option>
              <option value="15" onClick={() => setValuNumbur(15)}>
                15
              </option>
              <option value="20" onClick={() => setValuNumbur(20)}>
                20
              </option>
              <option value="25" onClick={() => setValuNumbur(25)}>
                25
              </option>
            </select>{" "}
            entité par pages
          </label>
        </div>
        <div className="dataTable-search">
          <Button variant="primary" onClick={()=>{setActivUpdatePost(true)}} className="custom_color">Ajouter</Button>
        </div>
      </div>
      <div className="dataTable-container p-2 bd-highlight">
        <Table striped bordered hover className="tableBody">
          <thead>
            <tr>
              {colloneName.map((value,key)=>{return(
                  <th
                  onClick={() => {
                    setTri(takeKeyObjectByNumber(keFocus[key],items[0]));
                    let newValue = [false,false,false,false,false,false,false,false,false,false];
                    newValue[key] = true;
                    setActivTri(newValue);
                  }}
                >
                  {value} {Arrow(activTri[key])}
                </th>
              )})}
              {(bouttons!=null)?<th className="center" onClick={() => {setTri("comp3");}}> Actions</th>:<></>}
            </tr>
          </thead>
          <tfoot>
            <tr>
            {colloneName.map((value,key)=>{return(
                  <th
                  onClick={() => {
                    setTri(takeKeyObjectByNumber(keFocus[key],items[0]));
                    let newValue = [false,false,false,false,false,false,false,false,false,false];
                    newValue[key] = true;
                    setActivTri(newValue);
                  }}
                >
                  {value} {Arrow(activTri[key])}
                </th>
              )})}
              {(bouttons!=null)?<th className="center" onClick={() => {setTri("comp3");}}> Actions</th>:<></>}
            </tr>
          </tfoot>
          <tbody>
            {items.map((item) => {
              if (true)
                return (
                  <LigneList
                    idLine={1}
                    item={item}
                    actualisationAllData={actualisationAllData}
                    bouttons={bouttons}// :boolean
                    keFocus={keFocus}// :[number, number | null, number | null][]
                    takeVauleObjectByNumber={takeVauleObjectByNumber}// :(n: [number, number | null, number | null], o: Object) => string
                    dataCompose={props.dataCompose}
                  />
                );
            })}
          </tbody>
        </Table>
      </div>
      <div className="dataTable-bottom p-2">
        <div className="dataTable-info">
          {"Affiche " +
            (page * valuNumbur - valuNumbur + 1) +
            " à " +
            Math.min(page * valuNumbur, items.length) +
            " sur " +
            items.length +
            " livres"}
        </div>
        <nav className="dataTable-pagination">
          {HorizontalPagination(items.length, valuNumbur, page, setPage, tri)}
        </nav>
      </div>
      {activUpdatePost?<Formulaire
      book = {undefined} //: book | undefined;
      id = {null} //:number | null;
      fermetur = {finishUpdatPost} //:()=>void;
      dataCompose = {props.dataCompose} //:category[];
      change = {4} //:any;
    />:<></>}
    {activLoading?Load(finishLoadingt):<></>}
    </div>
  );
};
