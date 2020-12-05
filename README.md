![Badge](https://img.shields.io/badge/npm-6.14.5-%237159c1?style=for-the-badge&logo=ghost)

# Rick e Morty

![image](https://user-images.githubusercontent.com/37550557/101245270-5f0f0880-36ea-11eb-97fd-7bfca3a45200.png)


## Índice

* [1. Introdução](#1-Introdução)
* [2. Definição de Produto](#2-definição-de-produto)
* [3. Objetivos](#3-objetivos)
* [4. Historia de usuario](#4-historia-de-usuario)
* [5. Prototipo de baixa fidelidade](#5-prototipo-de-baixa-fidelidade)
* [6. Estrutura e funcionalide](#6-estrutura-e-funcionalidades)
* [7. Ferramentas](#7-Ferramentas)
* [8. Considerações técnicas](#8-considerações-técnicas)
* [9. Deploy](#9-deploy)
* [10. Autoria](#10-autoria)

***

## 1. Introdução
Este projeto consiste na criação de uma aplicação web para Jovens e Adultos que assistem e gostam da
Série de Rick e Morty. Sua interface e simples e amigável para que usuarios possam acessar, filtrar e ordenar
informações sobre os personagens. Os dados estão dispostos de forma acessivel, podendo ser filtrado de acordo com a prefêrencia do usuário. Seu design foi criado pensando na responsividade e na acessibilidade.

## 2. Definição de produto
O produto tem como objetivo oferecer ferramentas que auxiliam o usuario a buscar informações a respeito 
dos personagens da série.

## 3. Objetivos
Os objetivos do produto são:
*Desenvolvimento de filtro que auxiliam o usuario a encontrar personagens específicos.
*Apresentação de dados sobre cada personagem.
*Construção de testes unitários.
*Responsividade do site.

## 4. História de Usuário
O projeto foi estruturado com base nas histórias de usuário.

*História do usuário 1*
"Eu, Gabriel, quero manipular filtros sobre os personagens para aprofundar meu conhecimento sobre a série."

*História do usuário 2*
"Eu, Mariana, quero pesquisar sobre os personagens para acompanhar a conversa com meu marido sem ter que ver a série."

## 5. Protótipo de baixa fidelidade

Inicialmente, fizemos algumas versões para o site para testar a disposição dos objetos na página, 
utilizando o _Wireframe_ e no desenvolvimeto fizemos algumas adaptações.

![image](https://user-images.githubusercontent.com/37550557/101233629-ec753d00-3697-11eb-832d-0b7a8527c3f6.png)


### 6. Estrutura e funcionalidade

A estrutura é clara, objetiva e funciona de maneira responsiva.

![image](https://user-images.githubusercontent.com/37550557/101234838-a2915480-36a1-11eb-87e0-8b23945373ee.png)

### 6.1 Home, Personagens e Saiba mais

A aba traz sucessivamente a tela inicial onde e realizado uma breve introdução seguido dos principais personagens da serie. Na aba Personagens temos um catalogo de todos os personagens da série e por fim na aba Saiba mais temos mais informações sobre os personagens e a série.

### 6.2 Filtros

![image](https://user-images.githubusercontent.com/37550557/101235279-0c136200-36a6-11eb-9178-850e01a578a4.png)

Temos a opção de filtrar por especie, status (de vida) e gênero.

### 6.3 Ordenar

A opção de ordenar possui um _select_ com as opções de ordenar de A a Z, de Z a A.

### 6.4 Modal

O modal é aberto, quando clicamos em um personagem, e desejamos saber mais informações sobre ele.

![image](https://user-images.githubusercontent.com/37550557/101235397-1550fe80-36a7-11eb-8083-b6d4fbe80de9.png)

### 7. Ferramentas

Para a construção da aplicação foi utilizado o software Visual Studio Code com a extenção do Node-js. A marcação  realizada em HTML, a estilização em CSS. Sua programação foi realizada em vaila JavaScript, contendo arquivos main.js responsavel pela interação dos elementos DOM e o data.js responsavel pelas funções de filtragem. Os dados foram importados do arquivo de dados rickandmorty.js.

## 8. Considerações técnicas

O arquivo está estruturado da seguinte forma:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data 
|  |  └── rickandmorty
|  |     ├── rickandmorty.js
|  |     └── rickandmorty.json
|  |     └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 6 file: 17
```

### 9. Deploy

Para iniciar, será necessario ter instalado na máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de texto como o [VSCode](https://code.visualstudio.com/)

**Clone o repositório:**
$ git clone <https://github.com/Lu-Pereira/SAP005-data-lovers>

**Acesse a pasta do projeto no terminal:**
$ cd SAP005-data-lovers

**Instale as dependências do projeto:**
$ npm install

**Execute a aplicação:**
$ npm start

O servidor inciará na **porta:5000**
acesse <http://localhost:5000>


Os arquivos principais estão na pasta _src_ que contém:
* `src/index.html`: Onde está a estrutura da aplicação, que sera exibida ao usuário. Este arquivo
  contém a marcação HTML, chama o CSS, e serve para indicar quais
scripts serão utilizados.

* `src/main.js`: O `src/main.js` é onde se localiza todos os códigos que tenham a ver
com a exibição dos dados na tela. Com isto nos referimos basicamente à interação
com o DOM. Operações como criação de nós, registro de manejadores de eventos
(_event listeners_ ou _event handlers_) e etc.

* `src/data.js`: Contem toda a funcionalidade que corresponda a
obter, processar e manipular dados, como as funções:

* `filterData(data, condition)`: esta função recebe os dados e nos retorna
os que cumprem com a condição.

* `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros. O
primeiro, `data`, nos entrega os dados. O segundo, `sortBy`, diz respeito a
qual das informações quer usar para ordenar. O terceiro, `sortOrder`, indica
se quer ordenar de maneira crescente ou decrescente.

* `computeStats(data)`: essa função nos permite fazer cálculos estatísticos
básicos para serem exibidos de acordo com o que os dados permitem.

* `src/data`: Nesta pasta estão os dados de diferentes fontes..

* `test/data.spec.js`: É onde esta implementado os teste unitários das funções implementadas no arquivo
`data.js`.

## 10. Autoria 

Este projeto foi realizado por Ana e Luciana Pereira com base no projeto da Laboratoria.
