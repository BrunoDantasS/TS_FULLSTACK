# TS_FULLSTACK

<br>
<br>

## BACKEND
___
_**Especificação:** Node.JS e TypeScript_

_**Objetivo:** Construir uma aplicação conectada ao teste de backend, onde que o admin possa logar para cadastrar os usuários e ver seus endereços, e o user possa logar e ver o endereço dele._

<br>

> Models

* Usuário:
  * `Nome`
  * `Telefone`
  * `Email` (Com validação)
  * `Idade`
  * `Peso`
  * `Etinia` (ENUM)
  * `Role`
* Endereços:
  * `Endereço`
  * `Numero`
  * `Complemento`
  * `CEP`
  * `Cidade`
  * `Estado`
  * `Roles`

<br>

> Serviços

* Crud User
* Crud Endereços
* Sessão

<br>

> Requisitos:

* **Obrigatórios**
  * [ ] JWT
  * [ ] Postgree
  * [ ] Testes

* **Bônus**
  * [ ] Docker (Bônus)

<br>
<br>

## O FRONTEND
___
_**Especificação:** React_

_**Objetivo:** Construir uma dashboard simples, composta por um sidemenu, header e content._

<br>

> Paginas

* Login
* Users
  * Paginação e pesquisa
* Single User
  * Mostrar os endereços do user
* Listagem geral de endereço
  * Paginação e pesquisa
* Create User
* Create Address

<br>

> Requisitos

* [ ] Sidemenu expansível (Não utilizar libs, fazer animações com css)
* [ ] Hooks
* [ ] ContextApi
* [ ] Memoização de componentes e paginas
* [ ] Axios
* [ ] Componentização
* [ ] Styled componentes
* [ ] Prototipação

<br>

> Bônus

* [ ] Testes;
* [ ] Armazenamento de sessão (Pedir ao user se pode salvar os dados de acesso)
