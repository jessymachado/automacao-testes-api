const request = require('supertest');
const sinon = require('sinon');
const { expect} = require('chai');

const app = require('../../app')



describe('Transfer Controller', () => {
    describe('POST /transferir', () => {
        it('Quando informo remetente e destinatório inexistente recebo 400', async () => {
            const resposta = await request(app)
                .post('/transferir')
                .send({
                      de: "jessica",
                      para: "tatiane",
                      valor: 10                    
                });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('erro', 'Usuário remetente ou destinatário não encontrado.')
        });
    });
});
