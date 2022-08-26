import React from 'react';
import { NavbarHeader, TableConstructor } from '../components';
import { ProjectUrl } from '../constants';
import { category, book } from '../interfaces';

interface props{
    items: book[];
    actualisationAllData:() => void;
    setActivUpdat: React.Dispatch<React.SetStateAction<boolean>>;
    dataCompose:category[]
  }

const Ranking: React.FC<props> = (props) => {
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
            colloneName= {["Rand","Titre",'Autre','Nombre de page',"Nombre d'emprunts"]}
            keFocus={[[0,null,null],[0,null,null],[0,null,null],[0,null,null],[0,null,null]]}
            bouttons={null}
            dataCompose={props.dataCompose}
            title={"Classement des livres par nombre d’emprunts"}
          />
        </>
    );
};

export default Ranking;