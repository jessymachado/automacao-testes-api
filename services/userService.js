const { users } = require('../models/userModel');

function registrarUsuario({ usuario, senha, favorecido, saldo }) {
  if (!usuario || !senha) {
    return { erro: 'Usuário e senha são obrigatórios.' };
  }
  if (users.find(u => u.usuario === usuario)) {
    return { erro: 'Usuário já registrado.' };
  }
  const novoUsuario = { usuario, senha, favorecido: !!favorecido, saldo: typeof saldo === 'number' && saldo >= 0 ? saldo : 0 };
  users.push(novoUsuario);
  return { usuario: novoUsuario };
}

function entrarUsuario({ usuario, senha }) {
  if (!usuario || !senha) {
    return { erro: 'Usuário e senha são obrigatórios.' };
  }
  const usuarioEncontrado = users.find(u => u.usuario === usuario && u.senha === senha);
  if (!usuarioEncontrado) {
    return { erro: 'Credenciais inválidas.' };
  }
  return { usuario: usuarioEncontrado };
}

function listarUsuarios() {
  return users;
}

module.exports = {
  registrarUsuario,
  entrarUsuario,
  listarUsuarios,
};
