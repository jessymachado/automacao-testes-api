# API de Testes e Automação

Esta API REST foi desenvolvida em Node.js com Express para fins de aprendizado de testes e automação de APIs. O banco de dados é em memória, utilizando variáveis locais.

## Funcionalidades
- Registro de usuário
- Login de usuário
- Consulta de usuários
- Transferência de valores entre usuários
- Documentação Swagger disponível em `/api-docs`

## Regras de Negócio
1. Login e senha são obrigatórios para logar.
2. Não é permitido registrar usuários duplicados.
3. Transferências para destinatários não favorecidos só podem ser realizadas se o valor for menor que R$ 5.000,00.

## Estrutura de Diretórios
- `controllers/` - Lógica das rotas
- `services/` - Regras de negócio
- `models/` - Dados em memória
- `app.js` - Configuração das rotas e middlewares
- `server.js` - Inicialização do servidor
- `swagger.json` - Documentação da API

## Instalação
1. Clone o repositório
2. Instale as dependências:
   ```cmd
   npm install express swagger-ui-express
   ```
3. Inicie o servidor:
   ```cmd
   node server.js
   ```

## Testes
Para testar a API com Supertest, importe o `app.js` em seus testes sem executar o método `listen()`.

## Documentação
Acesse a documentação Swagger em [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints
Consulte o arquivo `swagger.json` ou a documentação Swagger para detalhes dos endpoints e exemplos de requisições.
