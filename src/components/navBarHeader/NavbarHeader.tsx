import React from 'react';
import { APIUrl, ProjectUrl } from '../../constants';
import "./style.css";

const NavbarHeader = (navList:{name:string,href:string}[],title:{name:string,href:string}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav_perso">
            <a className="navbar-brand" href={title.href}> {title.name} </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {navList.map((data,key)=>{return(
                        <li className="nav-item active">
                            <a className="nav-link" href={data.href}> {data.name}  <span className="sr-only">(current)</span></a>
                        </li>
                    )})}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0 custom_color" formAction={ProjectUrl+"/"} type="submit">Se déconnecter</button>
                </form>
            </div>
            </nav>
        </>
    );
};

export default NavbarHeader;



