import moment from 'moment'

export function validate(values) {
    const errors = {}

    if (!values.name) {
        errors.name = 'Nome obrigatório'
    }
    if (!values.email) {
        errors.email = 'Email obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }
    /* if (!values.cpf) {
        errors.cpf = 'Cpf obrigatório'
    } else if (!/^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/i.test(values.cpf)) {
        errors.cpf = 'Cpf inválido'
    }
    if (!values.rg) {
        errors.rg = 'RG obrigatório'
    } */
    if (!values.phone) {
        errors.phone = 'Telefone obrigatório'
    } else if (! /^[1-9]{2} [2-9][0-9]{3,4}\-[0-9]{4}/i.test(values.phone)) {
        errors.phone = 'Telefone inválido'
    }
    if (!values.office) {
        errors.office = 'Cargo obrigatório'
    }

   /*  let begging = moment(values.beginningOfMandate, "DD/MM/YYYY").format()
    let end = moment(values.endOfMandate, "DD/MM/YYYY").format()    

    if (!values.beginningOfMandate) {
        errors.beginningOfMandate = 'Cargo obrigatório'
    }
    if (!values.endOfMandate) {
        errors.endOfMandate = 'Cargo obrigatório'
    } else if (begging > end) {
        errors.endOfMandate = 'Termíno do mandato deve ser posterior a data de ínicio'
    } */

    return errors
}