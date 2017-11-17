import React, { Component } from 'react'
import { Field } from 'redux-form'

import LabelAndInput from '../common/form/LabelAndInput'
import LabelAndMask from '../common/form/LabelAndMask'
import BoxBody from '../common/template/box/BoxBody'

class OSCForm extends Component {

    render() {
        const { readOnly, ignorePassword = true } = this.props
        return (
            <div>
                <BoxBody>
                    <fieldset>
                        <legend> Dados da Organização </legend>
                        <Field name='name' component={LabelAndInput} readOnly={readOnly}
                            label='Nome da Organização' cols='12 12' placeholder='Informe o Nome da Organização' />

                        <Field name='cnpj' component={LabelAndMask} mask='99.999.999/9999-99' readOnly={readOnly}
                            label='CNPJ' cols='12 4' placeholder='Ex. 94.980.684/0001-89' />

                        <Field name='phone' component={LabelAndInput} label='Telefone'
                            cols='12 4' readOnly={readOnly} placeholder='Ex. 35 3445-0281' />

                        <Field name='registrationCM' component={LabelAndInput} label='Conselho Municipal'
                            cols='12 4' readOnly={readOnly} placeholder='Ex. 13-5436' />

                        <Field name='email' component={LabelAndInput} label='Email'
                            cols='12 6' readOnly={readOnly} placeholder='Informe um email para a organização' type='email' />

                        {ignorePassword &&
                            <Field name='password' component={LabelAndInput} label='Senha'
                                cols='12 6' type='password' readOnly={readOnly} placeholder='Informe uma senha' />
                        }
                    </fieldset>
                </BoxBody>
                <BoxBody>
                    <fieldset>
                        <legend> Logradouro </legend>
                        <Field name='address.street' component={LabelAndInput} readOnly={readOnly}
                            label='Rua/Avenida/Praça' cols='12 8' placeholder='Ex: Av. João de Camargo, 89' />

                        <Field name='address.number' component={LabelAndInput} readOnly={readOnly}
                            label='Número' cols='12 4' placeholder='Ex: 456' />

                        <Field name='address.neighborhood' component={LabelAndInput} label='Bairro'
                            cols='12 4' readOnly={readOnly} placeholder='Ex. Centro' />

                        <Field name='address.city' component={LabelAndInput} readOnly={readOnly}
                            label='Município' cols='12 8' placeholder='Ex: Santa Rita do Sapucai - MG' />
                    </fieldset>
                </BoxBody>
            </div>
        )
    }
}

export default OSCForm