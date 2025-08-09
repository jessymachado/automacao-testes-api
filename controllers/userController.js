const userService = require('../services/userService');

exports.registrar = (req, res) => {
  const { usuario, senha, favorecido, saldo } = req.body;
  const resultado = userService.registrarUsuario({ usuario, senha, favorecido, saldo });
  if (resultado.erro) return res.status(400).json({ erro: resultado.erro });
  res.status(201).json(resultado.usuario);
};

exports.entrar = (req, res) => {
  const { usuario, senha } = req.body;
  const resultado = userService.entrarUsuario({ usuario, senha });
  if (resultado.erro) return res.status(401).json({ erro: resultado.erro });
  res.json(resultado.usuario);
};

exports.listarUsuarios = (req, res) => {
  res.json(userService.listarUsuarios());
};
