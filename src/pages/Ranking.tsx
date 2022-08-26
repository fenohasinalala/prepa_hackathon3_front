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
            colloneName= {["Rang","Titre",'Auteur','Nombre de page',"Nombre d'emprunts"]}
            keFocus={[[8,null,null],[1,null,null],[2,null,null],[3,null,null],[7,null,null]]}
            bouttons={null}
            dataCompose={props.dataCompose}
            title={"Classement des livres par nombre d’emprunts"}
          />
        </>
    );
};

export default Ranking;