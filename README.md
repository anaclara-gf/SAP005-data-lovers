![Badge](https://img.shields.io/badge/npm-6.14.5-%237159c1?style=for-the-badge&logo=ghost)

# Rick e Morty

![image](https://user-images.githubusercontent.com/37550557/101245393-510db780-36eb-11eb-94ac-8c90b1822017.png)


## Índice

* [1. Introdução](#1-Introdução)
* [2. Definição de Produto](#2-definição-de-produto)
* [3. Objetivos](#3-objetivos)
* [4. Protopersonas e histórias de usuários](#4-historia-de-usuario)
* [5. Protótipo de baixa fidelidade](#5-prototipo-de-baixa-fidelidade)
* [6. Estrutura e funcionalide](#6-estrutura-e-funcionalidades)
* [7. Ferramentas](#7-Ferramentas)
* [8. Considerações técnicas](#8-considerações-técnicas)
* [9. Deploy](#9-deploy)
* [10. Autoria](#10-autoria)

***

## 1. Introdução
Este projeto consiste na criação de uma aplicação web voltada principalmente para Jovens e Adultos que assistem e gostam da Série de Rick e Morty. Sua interface é simples e amigável para que usuários possam acessar, pesquisar, filtrar e ordenar informações sobre os personagens. Os dados estão dispostos de forma acessível em cards com duas faces. Seu design foi criado pensando na responsividade.


## 2. Definição de produto
O produto tem como objetivo oferecer ferramentas que auxiliam o usuário a buscar informações a respeito 
dos personagens da série.


## 3. Objetivos
Os objetivos do produto são:
* Apresentação dos dados sobre cada personagem em cards de duas faces;
* Desenvolvimento de funcionalidades de pesquisa e de filtro que auxiliam o usuário a encontrar personagens específicos;
* Desenvolvimento da funcionalidade de ordenação que auxilia o usuário a aprimorar sua experiência de pesquisa;
* Construção de testes unitários;
* Responsividade do site.


## 4. Histórias de Usuários
O projeto foi estruturado com base em duas protopersonas:

### 4.1 Usuário Potencial: Gabriel

**Informações Demográficas**
* 25 anos
* Casado
* Geek
* Engenheiro de Software

**Comportamentos**
* Assiste animações adultas
* É curioso em aprofundar-se em informações sobre assuntos do seu interesse
* Joga todos os dias (computador e/ou jogos de tabuleiro)
* Utiliza pouco redes sociais
* Gosta de aprofundar os tópicos de conversa com pessoas próximas

**Necessidades e objetivos**
* Relembrar informações de personagens para assistir a nova temporada porque faz tempo que assistiu a temporada anterior
* Saciar alguma curiosidade sobre algum personagem específico
* Ter mais tempo para seus hobbies

**_História do usuário_**
"Eu, Gabriel, quero manipular filtros sobre os personagens para aprofundar meu conhecimento sobre a série."

**Critérios de aceitação**
* [ ] O usuário pode filtrar os personagens em algumas características (status, espécie e gênero);
* [ ] O filtro deve retornar todos os personagens com a característica selecionada;
* [ ] O acesso pode ser feito por qualquer dispositivo;
* [ ] A pesquisa deve retornar o número de personagens com a seguinte característica e a porcentagem em relação ao total de personagens.

**Definição de Pronto**
* [ ] A página ser responsiva;
* [ ] Código passando pelo linter (está de acordo com o guia de estilos);
* [ ] A função relativa ao filtro deve ter um teste no _data.spec.js_;
* [ ] A pesquisa deve retornar o valor desejado;
* [ ] O código está no repositório.


### 4.2 Usuário Casual: Mariana

**Informações Demográficas**
* 24 anos
* Casada
* Estudante
* Cult

**Comportamentos**
* Viciada em redes sociais
* Gosta de acompanhar as tendências
* Tem muito interesse em design
* Gosta de conversar sobre os interesses de pessoas próximas
* Faz trabalhos manuais no tempo livre

**Necessidades e objetivos**
* Quer saber mais sobre os assuntos que o marido gosta
* Entender a história da série para conversar com o marido
* Conhecer os personagens para entender a complexidade da série
* Ter uma experiência agradável em relação ao design da aplicação

**_História do usuário_**
"Eu, Mariana, quero pesquisar sobre os personagens para acompanhar a conversa com meu marido sem ter que ver a série."

**Critérios de aceitação**
* [ ] O usuário pode pesquisar um personagem pelo nome na caixa de pesquisa;
* [ ] O usuário não deve poder fazer uma pesquisa com a caixa de pesquisa em branco;
* [ ] A resposta da pesquisa deve retornar todos os personagens que contém a palavra pesquisada e não deve ser case sensitive;
* [ ] O acesso pode ser feito por qualquer dispositivo;
* [ ] A pesquisa deve retornar o número de personagens com o respectivo nome pesquisado e a porcentagem em relação ao total de personagens;
* [ ] Se não existir um personagem com aquele nome, deve retornar a mensagem "Não foi encontrado nenhum resultado para sua busca".

**Definição de Pronto**
* [ ] A página ser responsiva;
* [ ] Código passando pelo linter (está de acordo com o guia de estilos);
* [ ] A função relativa à pesquisa deve ter um teste no _data.spec.js_;
* [ ] A pesquisa deve retornar o valor desejado;
* [ ] O código está no repositório.


## 5. Protótipo de baixa fidelidade

Inicialmente, fizemos algumas versões para o site para testar a disposição dos objetos na página, 
utilizando o _Wireframe_ e no desenvolvimento fizemos algumas adaptações.
A imagem abaixo ilustra uma das últimas versões do protótipo, já bem próxima ao resultado da página final.

![image](https://user-images.githubusercontent.com/37550557/101233629-ec753d00-3697-11eb-832d-0b7a8527c3f6.png)


### 6. Estrutura e funcionalidade

A estrutura é clara, objetiva e funciona de maneira responsiva.
A imagem abaixo mostra como a página inicial do site funciona em dispostivos com telas menores de 767px.

![image](https://user-images.githubusercontent.com/37550557/101234838-a2915480-36a1-11eb-87e0-8b23945373ee.png)

### 6.1 Menu

O menu está localizado à direita do cabeçalho e é composto de três páginas: a primeira é a página _Home_, onde há uma breve introdução sobre a série e os cards dos cinco personagens principais (a home também pode ser acessada pelo logo em qualquer uma das outras duas páginas); a segunda é a página _Personagens_, onde há um catálogo de todos os personagens da série e as funcionalidades de filtro e ordenação (a funcionalidade de pesquisa pode ser acessada de qualquer uma das três páginas) e a terceira página é a _Saiba Mais_, onde há um texto crítico sobre a série, o trailer o link para assistir a série na Netflix. 

### 6.2 Filtros

![image](https://user-images.githubusercontent.com/37550557/101235279-0c136200-36a6-11eb-9178-850e01a578a4.png)

Como ilustrado na imagem acima, temos a opção de filtrar por espécie, status e gênero (os filtros são acumulativos dentro da categoria e exclusivos entre categorias). O filtro funciona como um menu escondido que só é ativado quando o botão "Filtros" é clicado. Ainda, há um botão "Limpar Filtros" para deselecionar todas as opções. 

### 6.3 Ordenação

A opção de ordenar possui um _select_ com as opções de ordenar pelo nome do personagem (de A a Z e de Z a A) ou pelo número de episódios em que o personagem aparece (do menor para o maior e do maior para o menor).

### 6.4 Modal

Cada card de personagem é composto de duas faces: a face da frente mostra uma imagem, o nome do personagem e as três informações pelas quais podemos filtrá-los; a face de trás, que é acessada quando o usuário passa o mouse por cima do card, mostra informações complementares sobre o personagem, além da porcentagem de episódios que aparece. No responsivo, o acesso à face de trás é realizado pelo clique. 

A imagem abaixo mostra três cards, o primeiro e o terceiro (personagns Rick Sanchez e Summer Smith) estão mostrando a face da frente e o segundo (personagem Morty Smith) está mostrando a face de trás. 

![image](https://user-images.githubusercontent.com/37550557/101235397-1550fe80-36a7-11eb-8083-b6d4fbe80de9.png)


### 7. Ferramentas

Para a construção da aplicação foi utilizado o software Visual Studio Code com a extenção do Node-js. A marcação foi realizada em HTML e a estilização em CSS. Sua programação foi realizada em vanilla JavaScript, contendo arquivos _main.js_, responsável pela interação dos elementos DOM e os eventos, e o _data.js_, responsável pelas funções de filtro, ordenação, pesquisa e cálculo. Os dados foram importados do arquivo de dados _rickandmorty.js_.


## 8. Considerações técnicas

O arquivo está estruturado da seguinte forma:

```text
.
├── README.md
├── package.json
├── src
|  ├── data 
|  |  └── rickandmorty
|  |     ├── rickandmorty.js
|  |     └── rickandmorty.json
|  |     └── README.md
|  ├── img  
|  |  └── hamburguer_icon.png
|  |  └── logo-nome.png
|  |  └── netflix.png
|  |  └── rick-and-morty-img.jpg   
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

```


### 9. Deploy

Para iniciar, é necessário ter instalado na máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de texto como o [VSCode](https://code.visualstudio.com/).

**Clone o repositório:**
$ git clone <https://github.com/anaclara-gf/SAP005-data-lovers.git>

**Acesse a pasta do projeto no terminal:**
$ cd SAP005-data-lovers

**Instale as dependências do projeto:**
$ npm install

**Execute a aplicação:**
$ npm start

O servidor inciará na **porta:5000** <http://localhost:5000>


Os arquivos principais estão na pasta _src_ que contém:
* `src/index.html`: Onde está a estrutura da aplicação, que sera exibida ao usuário. Este arquivo contém a marcação HTML, chama o CSS, e serve para indicar quais scripts serão utilizados.

*`src/main.js`: Onde se localiza todos os códigos que tenham a ver com a exibição dos dados na tela. Com isto nos referimos basicamente à interação com o DOM. Operações como criação de nós, registro de manejadores de eventos (_event listeners_) e etc.

*`src/data.js`: Contem toda a funcionalidade que corresponda a obter, processar e manipular dados, como as funções:

* `sortData(data, sortBy, sortOrder)`: esta função recebe três parâmetros. O primeiro, `data`, nos entrega os dados. O segundo, `sortBy`, diz respeito a qual das informações quer usar para ordenar. O terceiro, `sortOrder`, indica se quer ordenar de maneira crescente ou decrescente.

* `sortDataArrayLength(data, sortBy, sortOrder)`: esta função é muito similar a `sortData`, mas funciona para ordenar os intens de acordo com o comprimento de um array. 

* `search(data, searchBy, searchText)`: esta função recebe três parâmetros. O primeiro, `data`, nos entrega os dados. O segundo, `searchBy`, diz respeito a qual das informações utilizar para a pesquisa. O terceiro `searchText`, indica qual é o texto que deve ser pesquisado.

* `filter(data, filterBy, filterName)`: esta função recebe os dados pelo parâmetro `data` e nos retorna os dados filtrados de acordo com a informação que deve ser utilizada na pesquisa, `filterBy` e com o filtro que o usuário escolheu, `filterName`. 

* `computeStats(data)`: essa função nos permite fazer a porcentagem de um dado específico em relação ao total.

*`src/data`: Nesta pasta está o arquivo `rickandmorty.js`, utilizado como banco de dados da aplicação. 

* `test/data.spec.js`: É onde está implementado os teste unitários das funções implementadas no arquivo
`data.js`.


## 10. Autoria 

Este projeto foi realizado por Ana Clara Garcia Farah e Luciana Pereira com base no projeto da Laboratória.
