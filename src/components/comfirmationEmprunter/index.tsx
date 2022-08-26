import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { book, category } from '../../interfaces';
import "./styles.css";

interface props {
  book: book;
  finish: ()=>void;
  function:()=>void;
}

const ConfirmEmprunt: React.FC<props> = (props) => {

  return (
    <>
      <Modal show={true} onHide={props.finish}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation des changements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3> <span className='entete_text'>Titre : </span>{props.book.title}</h3>
          <p><span className='entete_text'>Auteur : </span>{props.book.author}</p>
          <p><span className='entete_text'>Categorie : </span> {props.book.category.nameCategory}</p>
          <p><span className='entete_text'>Nombre de page : </span>{props.book.pages} Pages</p>
          <p><span className='entete_text'>Synopsis : </span> {props.book.synopsis}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.finish}>
            Fermer
          </Button> 
          <Button variant="primary" onClick={props.function}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmEmprunt;