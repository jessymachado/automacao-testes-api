const transferService = require('../services/transferService');

exports.transferir = (req, res) => {
  const { de, para, valor } = req.body;
  const resultado = transferService.transferir({ de, para, valor });
  if (resultado.erro) return res.status(400).json({ erro: resultado.erro });
  res.status(201).json(resultado.transferencia);
};

exports.listarTransferencias = (req, res) => {
  res.json(transferService.listarTransferencias());
};
