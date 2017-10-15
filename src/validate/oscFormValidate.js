import moment from 'moment'

export function validate(values) {
    const errors = { boardMemberList: [{ address: {} }], address: {} }
    if (!values.name) {
        errors.name = 'Nome obrigatório'
    }
    if (!values.cnpj) {
        errors.cnpj = 'CNPJ obrigatório'
    } else if (! /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g.test(values.cnpj)) {
        errors.cnpj = 'CNPJ inválido'
    }
    if (!values.email) {
        errors.email = 'Email obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }
    if (!values.phone) {
        errors.phone = 'Telefone obrigatório'
    } else if (! /^[1-9]{2} [2-9][0-9]{3,4}\-[0-9]{4}/i.test(values.phone)) {
        errors.phone = 'Telefone inválido'
    }
    if (!values.password) {
        errors.password = 'Senha obrigatório'
    } else if (values.password.length < 6) {
        errors.password = 'A senha deve conter no minimo 6 dígitos'
    }

    return errors
}