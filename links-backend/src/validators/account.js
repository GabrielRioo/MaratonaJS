// Usar a autenticaçã aq (hapi joi)
const Joi = require('@hapi/joi');
const { getValidatorError } = require('../helpers/validator');

const accountSignUp = (req, res, next) => {
    const { email, password, password_confirmation } = req.body;

    const schema = Joi.object({
        email: Joi.string().email().required(),
        // A senha tem que ter letras maiusculas e minusculas, numeros e ser de 3 a 30 caracteres
        password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{3,30}$')),
        // Confirma se as senhas estão iguais
        password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
    });

    // abortEarly = se o email n for valido, ele ja para e retorna q é invalido
    const options = { abortEarly: false };
    const { error } = schema.validate({ email, password, password_confirmation }, options);
    if (error) {
        const messages = getValidatorError(error, 'account.signup');

        return res.jsonBadRequest(null, null, { error: messages });
    }

    next();
}

module.exports = { accountSignUp };