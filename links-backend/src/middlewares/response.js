
const TYPE_JSON = 'application/json';
const STATUS_CODE_OK = 200; // Sucesso
const STATUS_CODE_BAD_REQUEST = 400; // Erro
const STATUS_CODE_UNAUTHORIZED = 401; // Sem autorização
const STATUS_CODE_NOT_FOUND = 404; // Pagina nao encontrada
const STATUS_CODE_SERVER_ERROR = 500; // Quando a apliação cai

const jsonOK = function (data, message, metadata) {
    const status = STATUS_CODE_OK;
    message = (message) ? message : 'Sucessful request.';
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: status });
}

const jsonBadRequest = function (data, message, metadata) {
    const status = STATUS_CODE_BAD_REQUEST;
    message = (message) ? message : 'Bad request.';
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: status });
}

const jsonUnauthorized = function (data, message, metadata) {
    const status = STATUS_CODE_UNAUTHORIZED;
    message = (message) ? message : 'Unauthorized';
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: status });
}

const jsonNotFound = function (data, message, metadata) {
    const status = STATUS_CODE_NOT_FOUND;
    message = (message) ? message : 'Not Found';
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: status });
}

const jsonServerError = function (data, message, metadata) {
    const status = STATUS_CODE_SERVER_ERROR;
    message = (message) ? message : 'Server Error';
    metadata = (metadata) ? metadata : {};

    this.status(status);
    this.type(TYPE_JSON);
    return this.json({ message, data, metadata, status: status });
}

// Terminou o que foi fazer aqui? Parte pro proximo (next)
const response = (req, res, next) => {
    res.jsonOK = jsonOK;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();
};

module.exports = response;