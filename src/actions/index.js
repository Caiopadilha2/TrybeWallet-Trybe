// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

// action é um objeto que contém um type. Guardar numa constante para não ter erros de digitação.
// Se a action for deste tipo, o reducer vai ter uma lógica para isso. A chave email vai receber o valor email.
