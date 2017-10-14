import React from 'react'
import PanelLeft from './PanelLeft'

const SolicitationSuccess = props => (

    <div className="container-fluid">
        <div className="main">
            <PanelLeft link='/login' label='Entrar' />
            <div className="col-sm-6 right-side">
                <div className="row text-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <br /><br /> <h4>Sua Solicitação foi enviada com </h4> <h2>Sucesso!</h2>
                        <img src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/128/Accept-icon.png" alt='success' />
                        {/* <h3>Obrigado por se cadastrar</h3> */}
                        <p >Seus dados serão submetidos a análise. </p>
                        <p>Em breve, entraremos em contato por e-mail.</p>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SolicitationSuccess;