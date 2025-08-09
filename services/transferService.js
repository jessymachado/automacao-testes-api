const { users } = require('../models/userModel');
const { transfers } = require('../models/transferModel');

function transferir({ de, para, valor }) {
  if (!de || !para || typeof valor !== 'number' || valor <= 0) {
    return { erro: 'Dados de transferência inválidos.' };
  }
  const remetente = users.find(u => u.usuario === de);
  const destinatario = users.find(u => u.usuario === para);
  if (!remetente || !destinatario) {
    return { erro: 'Usuario remetente ou destinatário não encontrado' };
  }
  if (remetente.saldo < valor) {
    return { erro: 'Saldo insuficiente.' };
  }
  if (!destinatario.favorecido && valor >= 5000) {
    return { erro: 'Transferências acima de R$ 5.000,00 só podem ser feitas para favorecidos.' };
  }
  remetente.saldo -= valor;
  destinatario.saldo += valor;
  const registroTransferencia = { de, para, valor, data: new Date() };
  transfers.push(registroTransferencia);
  return { transferencia: registroTransferencia };
}

function listarTransferencias() {
  return transfers;
}

module.exports = {
  transferir,
  listarTransferencias,
};
