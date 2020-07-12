module.exports = (sequelize, DataTypes) => {
    
    //Dados referente a conta (para logar) - NÃO É USUARIOS
    const Account = sequelize.define('Account', {
        email: {
            type: DataTypes.STRING, // é uma string
            allowNull: false, // não pode ser nulo
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    // para nao retornar as senha do usuario(json), quando salvar no banco.
    Account.prototype.toJSON = function() {
        const values = {...this.get() }; 
        delete values.password;
        return values;
    }

    return Account;
};