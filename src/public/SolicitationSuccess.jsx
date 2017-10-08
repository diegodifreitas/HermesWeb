import React from 'react'
import { Link } from 'react-router-dom';
import PanelLeft from './PanelLeft'

const SolicitationSuccess = props => (

    <div className="container-fluid">
        <div className="main">
            <PanelLeft link='/login' label='Entrar' />
            <div className="col-sm-6 right-side">
                <div className="row text-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <br /><br /> <h4>Sua Solicitação foi enviada com </h4> <h2>Sucesso!</h2>
                        <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/128/Accept-icon.png" />
                        <h3>Obrigado por se cadastrar</h3>
                        <p >Em breve suas informações serão analisadas e entraremos em contato para validar o acesso ao sistema.</p>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SolicitationSuccess;