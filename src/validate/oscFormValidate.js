import moment from 'moment'

export function validate(values) {
    const errors = { boardMemberList: [{ address: {} }], address: {} }
    if (!values.name) {
        errors.name = 'Nome da OSC obrigatório'
    }
    if (!values.cnpj) {
        errors.cnpj = 'CNPJ obrigatório'
    } else if (! /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g.test(values.cnpj)) {
        errors.cnpj = 'CNPJ inválido'
    }
    if (!values.email) {
        errors.email = 'Email da OSC obrigatório'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido'
    }
    if (!values.phone) {
        errors.phone = 'Telefone da OSC obrigatório'
    } else if ((! /^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}/i.test(values.phone)) || (! /(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/i.test(values.phone))) {
        errors.phone = 'Telefone da OSC inválido'
    }
    if (!values.password) {
        errors.password = 'Senha obrigatório'
    } else if (values.password.length < 6) {
        errors.password = 'A senha deve conter no minimo 6 dígitos'
    }
/* 
    errors.boardMemberList.forEach(x => {
        if (!x.name) {
            errors.boardMemberList[0].name = 'Nome obrigatório'
        }
        if (!x.email) {
            errors.boardMemberList[0].email = 'Email obrigatório'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(x.email)) {
            errors.boardMemberList[0].email = 'Email inválido'
        }
        if (!x.cpf) {
            errors.boardMemberList[0].cpf = 'Cpf obrigatório'
        } else if (!/^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/i.test(x.cpf)) {
            errors.boardMemberList[0].cpf = 'Cpf inválido'
        }
        if (x.rg) {
            errors.boardMemberList[0].rg = 'RG obrigatório'
        }
        if (x.phone) {
            errors.boardMemberList[0].phone = 'Telefone obrigatório'
        }
        if (x.office) {
            errors.boardMemberList[0].office = 'Cargo obrigatório'
        }

        let begging = moment(x.beginningOfMandate, "DD/MM/YYYY").format("MM/DD/YYYY")
        let end = moment(x.endOfMandate, "DD/MM/YYYY").format("MM/DD/YYYY")

        if (!x.beginningOfMandate) {
            errors.boardMemberList[0].beginningOfMandate = 'Cargo obrigatório'
        }
        if (!x.endOfMandate) {
            errors.boardMemberList[0].endOfMandate = 'Cargo obrigatório'
        } else if (begging < end) {
            errors.boardMemberList[0].endOfMandate = 'Termíno do mandato deve ser posterior a data de ínicio'
        }
    })

 */
    return errors
}