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

  const formik = useFormik({
    initialValues: {
      nameBook: (props.book==undefined?"":props.book.title),
      author: (props.book==undefined?"":""+props.book.author),
      pages: (props.book==undefined?"":""+props.book.pages),
      categorie: (props.book==undefined?"":props.book.category?.nameCategory),
      synopsis: (props.book==undefined?"":""+props.book.synopsis),
    },
    validationSchema: Yup.object({
      nameBook: Yup.string()
        .max(100, "Caractère inferieur ou egale à 100")
        .required("Requis"),
      author: Yup.string()
        .max(100, "Caractère inferieur ou egale à 100")
        .required("Requis"),
      pages: Yup.number()
        .max(1000000, "Page trop élevé")
        .required("Requis")
        .typeError('Saisissez des chiffres'),
      synopsis: Yup.string()
        .max(1000, "trop long"),
      categorie: Yup.string()
        .max(100, "Caractère inferieur ou egale à 100")
        .required("Requis"),
    }),
    onSubmit: (values) => {
      console.log(values);
      try {
        axios[props.id==null?"post":"put"](APIUrl+"/books"+(props.id==null?"":"/"+props.id), {
          nameBook: values.nameBook,
          author: values.author,
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
              {'      '}<h2>FORMULAIRE LIVRE</h2>
            </div>
            <form
              action=""
              className="form_class"
              onSubmit={formik.handleSubmit}
              onReset={formik.handleReset}
            >
              <div className="form_contenu">
                <label htmlFor="id" className="nameBook">
                  Titre
                </label>
                <input
                  id="nameBook"
                  type="text"
                  className="input_formulaire"
                  placeholder="Titre du Livre"
                  value={formik.values.nameBook}
                  onChange={formik.handleChange}
                />
                {formik.errors.nameBook ? (
                  <p> {formik.errors.nameBook} </p>
                ) : null}
              </div>

              <div className="form_contenu">
                <label htmlFor="id" className="author">
                  Auteur
                </label>
                <input
                  id="author"
                  type="text"
                  className="input_formulaire"
                  placeholder="Prix"
                  value={formik.values.author}
                  onChange={formik.handleChange}
                />
                {formik.errors.author ? <p> {formik.errors.author} </p> : null}
              </div>

              <div className="form_contenu">
                <label htmlFor="id" className="page">
                  Pages
                </label>
                <input
                  id="author"
                  type="page"
                  className="input_formulaire"
                  placeholder="Le nombre de page"
                  value={formik.values.pages}
                  onChange={formik.handleChange}
                />
                {formik.errors.author ? <p> {formik.errors.author} </p> : null}
              </div>

              <div className="form_contenu">
                <label htmlFor="id" className="author">
                synopsis
                </label>
                <input
                  id="author"
                  type="textarea"
                  className="input_formulaire"
                  placeholder="synopsis"
                  value={formik.values.synopsis}
                  onChange={formik.handleChange}
                />
                {formik.errors.author ? <p> {formik.errors.author} </p> : null}
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
