import React from 'react';
import { NavbarHeader, TableConstructor } from '../components';
import { ProjectUrl } from '../constants';
import { postPutDeletRequest } from '../hoooks';
import { category, book } from '../interfaces';
import "./style.css";


interface props{
    items: book[];
    actualisationAllData:() => void;
    setActivUpdat: React.Dispatch<React.SetStateAction<boolean>>;
    dataCompose:category[]
  }

const BooksClass: React.FC<props> = (props) => {
    return (
        <>
          {NavbarHeader(
              [
                  {name:"Liste des livres",href: (ProjectUrl + "/BooksClass")},
                  {name:"Classement des livres",href: (ProjectUrl + "/Ranking")}
              ],
              {name:"Gestion de bibliothèque",href: (ProjectUrl + "/")}
          )}
          <TableConstructor 
            items={props.items}
            actualisationAllData={props.actualisationAllData}
            setActivUpdat={props.setActivUpdat}
            colloneName= {["Titre","Auteur",'Catégorie','Nombre de page']}
            keFocus={[[1,null,null],[2,null,null],[5,1,null],[3,null,null]]}
            bouttons={[
              {name:"Emprunter",method:((book:any)=>{postPutDeletRequest("APIUrl","books",book.data,1,false,false,book.finishLoadingt)})},
              {name:"Rendre",method:((book:any)=>{postPutDeletRequest("APIUrl","books",book.data,1,false,false,book.finishLoadingt)})},
            ]}
            dataCompose={props.dataCompose}
            title={"Liste des Livres"}
          />
        </>
    );
};

export default BooksClass;