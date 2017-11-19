const validate = values => {
    const errors = {}

    if (!values.modality || values.modality === 'Selecione') {
        errors.modality = 'Obrigatório'
    }
    if (!values.modalityNumber) {
        errors.modalityNumber = 'Obrigatório'
    }
    if (!values.prtp) {
        errors.prtp = 'Obrigatório'
    }
    if (!values.budgetAllocation) {
        errors.budgetAllocation = 'Obrigatório'
    }
    if (!values.description) {
        errors.description = 'Obrigatório'
    }
    if (!values.date) {
        errors.date = 'Obrigatório'
    }
    if (!values.object) {
        errors.object = 'Obrigatório'
    }
    if (!values.modality || values.modality === 'Selecione') {
        errors.modality = 'Obrigatório'
    }

    if (values.osc) {
        if (!values.osc.id || values.osc.id === 0) {
            errors.osc.id = 'Obrigatório'
        }
    }

    if (!values.documents || !values.documents.length) {
        errors.documents = { _error: 'Para a publicação do processo é necessario adicionar o termo de referência.' }
    } else {
        const documentsArrayErrors = []
        values.documents.forEach((document, documentIndex) => {
            const documentErrors = {}
            if (!document || !document.name) {
                documentErrors.name = 'Required'
                documentsArrayErrors[documentIndex] = documentErrors
            }
            if (!document || !document.type) {
                documentErrors.type = 'Required'
                documentsArrayErrors[documentIndex] = documentErrors
            }
            if (!document || !document.expirationDate) {
                documentErrors.expirationDate = 'Required'
                documentsArrayErrors[documentIndex] = documentErrors
            }

            /*  if (document && document.hobbies && document.hobbies.length) {
                 const hobbyArrayErrors = []
                 document.hobbies.forEach((hobby, hobbyIndex) => {
                     if (!hobby || !hobby.length) {
                         hobbyArrayErrors[hobbyIndex] = 'Required'
                     }
                 })
                 if (hobbyArrayErrors.length) {
                     documentErrors.hobbies = hobbyArrayErrors
                     documentsArrayErrors[documentIndex] = documentErrors
                 }
                 if (document.hobbies.length > 5) {
                     if (!documentErrors.hobbies) {
                         documentErrors.hobbies = []
                     }
                     documentErrors.hobbies._error = 'No more than five hobbies allowed'
                     documentsArrayErrors[documentIndex] = documentErrors
                 }
             } */

        })
        if (documentsArrayErrors.length) {
            errors.documents = documentsArrayErrors
        }
    }
    return errors
}

export default validate