# Back-end do meu Blog

## **O que eu preciso?**


preciso de uma rota para obter os artigos(por enquanto não vou usar paginação). pode ser GET /articles
outra para add um article. pode ser POST /articles/add
outra para atualizar o artigo. PUT /articles/update
outra para caso eu va mudar apenas 1 coisa. PATCH articles/one-change
uma para deletar artigos. DELETE articles/delete


### **O que um artigo vai ter?**


senha para garantir que apenas quem tem autorização pode fazer algo relacionado aos artigos.
Artigos teem titulo, descrição/introdução, data de criação, sumario, banner(opcional)...


#### **To Do List**

- [ ] criar as rotas
  - [x] GET /articles
  - [x] POST /articles/add
  - [ ] PUT /articles/update
  - [ ] PATCH /articles/one-change
  - [x] DELETE /articles/delete

- [ ] criar o sistema de autenticação
  - [ ] gerar o token
  - [ ] criar a validação no model

- [ ] criar o banco de dados
  - [ ] criar a tabela
  ...

