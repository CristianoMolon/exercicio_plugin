$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder:'000.000.000-00'
    })

    $('#cep').mask('00000-000' , {
        placeholder:'00000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true
            },
            telefone: {
                required:true, minlength: 14
            },
            cpf: {
                required:true, minlength: 14
            },
            endereço: {
                required:true
            },
            cep: {
                required:true, minlength: 9
            },
        },
        messages: {
            nome: 'Por favor, Inserir seu nome',
            email: 'Por favor, Inserir seu email',
            telefone: 'Por favor, Inserir seu telefone',
            cpf: 'Por favor, Inserir seu cpf',
            endereço: 'Por favor, Inserir seu endereço',
            cep: 'Por favor, Inserir seu cep'
        }
    })
})