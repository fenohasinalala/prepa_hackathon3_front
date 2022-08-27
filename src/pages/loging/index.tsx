import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavbarHeader } from '../../components';
import { ProjectUrl, variant } from '../../constants';
import background from "../../assets/images/KOLORO_1661547966914.jpg";
import React from "react";
import "./style.css";

function Loging() {
  return (
    <>
        
        <div className="contereAllLoginb" style={{
          backgroundImage: 'url('+background+')',
          backgroundSize: "cover",
          height: "100vh",
          //color: "#f5f5f5"
        }}>
            <div className='connexion'>
            

            <div className='titleLoging'><h2>{"Se connecter"}</h2></div>
            <Form className="contereLoginb container">
                <Form.Group className="row " controlId="formBasicText">
                    <Form.Label className="col-3 attribut_input">Identifiant: </Form.Label>
                    <Form.Control className="col-6 custom_color_input" type="text" placeholder="Entrer l'Identifiant" />
                </Form.Group>

                <Form.Group className="row " controlId="formBasicPassword">
                    <Form.Label className="col-3 attribut_input">Mot de passe: </Form.Label>
                    <Form.Control className="col-6 custom_color_input" type="password" placeholder="Entrer le Mot de passe" />
                </Form.Group>


                <Form.Group className="row justify-content-center" controlId="bouttonFunction1">
                    <Button className="col-6 custom_color"  href={ProjectUrl+"/BooksClass"} type="submit">
                        CONNEXION
                    </Button>
                </Form.Group>


            </Form>
            </div>
        </div>
    </>
  );
}

export default Loging;
