import React, { Component } from 'react';
import './Cards.css';
import projetos from './Projetos.json';

import expand from '../assets/img/expand.png';
import search from '../assets/img/s.png';

class Cards extends Component {
    render = () => {
        let html = [];

        for (let projeto of projetos) {
            html.push(
                <div>
                <section className="card">
                                <h3 className="nome">{projeto.nome}</h3>
                                <h3 className="enquadramento">Patrimônio Cultural <b>{projeto.enquadramento}</b></h3>
                                <h3 className="proponente">Proponente: {projeto.proponente}</h3>
                                <h3 className="municipio">{projeto.municipio} - {projeto.UF}</h3> <button className="lei">Rouanet</button>
                                <h3 className="valor_aprovado">Aprovado <b>R${projeto.valor_aprovado},00</b></h3>
                                <h3 className="valor_captado">Captado <b>R${projeto.valor_captado},00</b></h3>
                                <h3 className="apoiadores">Apoiaram este <br/>projeto:</h3>

                                <button className="icon"><img src={expand} alt="expand" width="30" height="31"/></button>
                                <button className="icon"><img src={search} alt="search" width="30" height="29"/></button>
                                <button>Me escolha :)</button>
                </section>
                </div>


            );
        }

        return (
            <section className="cards">
                {html}
            </section>
        );
    }
}

export default Cards;