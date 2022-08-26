import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { category, book } from "../../interfaces";
import { APIUrl } from "../../constants";
interface props {
  book: book | undefined;
  id:number | null;
  fermetur:()=>void;
  dataCompose:category[];
  change:any;
}

const Formulaire: React.FC<props> = (props) => {
  const fermerFormulaire=()=>{setInterval(()=>{props.fermetur()},500); };
  const change = props.change;
  
  const [activ,setActiv] = useState(true)
  const [number,setNumber] = useState(0)
  useEffect (()=>{
      if (number==0) {
          setNumber(number+1);
      }else{
          setActiv(activ==false)
      }
  },[change]);
  
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formik = useFormik({
    initialValues: {
      nameDrink: (props.book==undefined?"":props.book.title),
      prix: (props.book==undefined?"":""+props.book.pages),

      categorie: (props.book==undefined?"":props.book.category?.nameCategory),
    },
    validationSchema: Yup.object({
      nameDrink: Yup.string()
        .max(50, "Caractère inferieur ou egale à 50")
        .required("Requis"),
      prix: Yup.number()
        .max(1000000, "Prix trop élevé")
        .required("Requis")
        .typeError('Saisissez des chiffres'),

      categorie: Yup.string()
        .max(50, "Caractère inferieur ou egale à 50")
        .required("Requis"),
    }),
    onSubmit: (values) => {
      console.log(values);
      try {
        axios[props.id==null?"post":"put"](APIUrl+"/books"+(props.id==null?"":"/"+props.id), {
          nameDrink: values.nameDrink,
          priceDrink: values.prix,
          category: {
            idCategory: values.categorie==props.dataCompose[0].nameCategory?props.dataCompose[0].idCategory:
            values.categorie==props.dataCompose[1].nameCategory?props.dataCompose[1].idCategory:
            values.categorie==props.dataCompose[2].nameCategory?props.dataCompose[2].idCategory:
            values.categorie==props.dataCompose[3].nameCategory?props.dataCompose[3].idCategory:
            0
            , // A VOIRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
            nameCategory: values.categorie // A VOIRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
          }
        }).then((response)=>{fermerFormulaire()});
      } catch (error) {
        console.log(error);
        fermerFormulaire();
      }
    },
  });


  if (true) {
    return (
      <>
        <div className="fonds2" onClick={()=>{props.fermetur()}}></div>
        <div className="fonds">
          <div className="form_fondsDrink">
            <button className="btn_cancel" onClick={()=>{props.fermetur()}}>
              X
            </button>
            <div className="titels">
              {'      '}<h2>FORMULAIRE BOISSON</h2>
            </div>
            <form
              action=""
              className="form_class"
              onSubmit={formik.handleSubmit}
              onReset={formik.handleReset}
            >
              <div className="form_contenu">
                <label htmlFor="id" className="nameDrink">
                  Nom
                </label>
                <input
                  id="nameDrink"
                  type="text"
                  className="input_formulaire"
                  placeholder="Nom de Boisson"
                  value={formik.values.nameDrink}
                  onChange={formik.handleChange}
                />
                {formik.errors.nameDrink ? (
                  <p> {formik.errors.nameDrink} </p>
                ) : null}
              </div>

              <div className="form_contenu">
                <label htmlFor="id" className="prix">
                  Prix
                </label>
                <input
                  id="prix"
                  type="text"
                  className="input_formulaire"
                  placeholder="Prix"
                  value={formik.values.prix}
                  onChange={formik.handleChange}
                />
                {formik.errors.prix ? <p> {formik.errors.prix} </p> : null}
              </div>

              <div className="form_contenu">
                <label htmlFor="id" className="categorie">
                  Catégorie
                </label>
                <select
                  id="categorie"
                  className="input_formulaire"
                  placeholder="categorie"
                  value={formik.values.categorie}
                  onChange={formik.handleChange}
                >
                  {props.dataCompose.map((donne)=>{return(
                      <option value={donne.nameCategory} label={donne.nameCategory}>
                      {donne.nameCategory}
                    </option>
                  )})}
                </select>
                {formik.errors.categorie ? (
                  <p> {formik.errors.categorie} </p>
                ) : null}
              </div>
              <button type="submit" className="btn_envoie btn_type">
                {props.id==null?"Ajouter":"Modifier"}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }else{
    return(<></>)
  }

};

export default Formulaire;
