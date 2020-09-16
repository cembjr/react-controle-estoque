import React from 'react';
import { Link } from 'react-router-dom';
import { LoginMenu } from '../../pages/LoginMenu';
import { MenuItem } from './MenuItem';

export const Menu : React.FC = () => {
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <Link className="navbar-brand" to="/">Controle Estoque</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    
                    <ul className="navbar-nav flex-grow-1">
                        <MenuItem to="/">Home</MenuItem>
                        <MenuItem to="/produtos">Produtos</MenuItem>
                        <LoginMenu />
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}