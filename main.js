import {
  sortData,
  sortDataArrayLength,
  search,
  filter,
  computeStats,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const html = {
    menuHomeButton: document.getElementById("home"),
    menuCharactersPageButton: document.getElementById("characters"),
    home: document.getElementById("first-page"),
    homeByLogoImage: document.getElementById("logo-image-button"),
    charactersPage: document.getElementById("characters-page"),
    chooseSortOrder: document.getElementById("sort-by"),
    optionEmptyOnSortOrder: document.getElementById("empty"),
    searchButton: document.getElementById("search-button"),
    searchText: document.getElementById("search"),
    menuHamburguer: document.getElementById("hamburguer"),
    menuHamburguerItems: document.getElementById("menu-container"),
    filterButton: document.getElementById("filter-button"),
    filterOptions: document.getElementById("filter-options"),
    homePageCharactersList: document.querySelector(".characters-list"),
    charactersList: document.getElementById("list"),
    paginateNumbers: document.querySelector(".numbers"),
    paginateFirstPageButton: document.querySelector(".first"),
    paginateLastPageButton: document.querySelector(".last"),
    paginateNextPageButton: document.querySelector(".next"),
    paginatePreviousPageButton: document.querySelector(".prev"),
    textItemsIndex: document.getElementById("textItems"),
    numberOfPages: document.getElementById("number-of-pages"),
    filterCheckbox: document.querySelectorAll('input[name="filter-option"]'),
    filterValuesButton: document.getElementById("filter-options-button"),
    paragraphNoResults: document.getElementById("no-results"),
    paginateIndex: document.querySelector(".paginate"),
    paginationButtonControls: document.querySelector(".pagination"),
    userChoices: document.querySelector(".user-choices"),
    menuMoreAboutButton: document.getElementById("more-about-button"),
    moreAboutPage: document.getElementById("more-about"),
    showPercentage: document.getElementById("show-percentage"),
    backToCharactersPage: document.getElementById("back-characters-page"),
    clearFilterOptions: document.getElementById("filter-options-clear"),
};

const loadHomePage = () => {
  html.searchText.value = "";
  searchDefinitions.searchText = html.searchText.value;
  uncheckFilters();
  searchDefinitions.searchFilter = "";
  html.filterOptions.classList.remove("show");
  html.home.classList.remove("page-disabled");
  html.charactersPage.classList.add("page-disabled");
  html.menuHamburguerItems.classList.remove("show");
  html.paragraphNoResults.classList.add("page-disabled");
  html.moreAboutPage.classList.add("page-disabled");
};

const loadCharactersPage = () => {
  pageDefinitions.page = 1;
  html.searchText.value = "";
  searchDefinitions.searchText = html.searchText.value;
  searchDefinitions.searchOrder = "empty";
  html.home.classList.add("page-disabled");
  html.charactersPage.classList.remove("page-disabled");
  update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter);
  buttonsControls.createListeners();
  html.menuHamburguerItems.classList.toggle("show");
  html.moreAboutPage.classList.add("page-disabled");
  html.showPercentage.classList.add("page-disabled");
};

const uncheckFilters = (checked = false) => {
  const allFilterItems = html.filterCheckbox;
  allFilterItems.forEach((filterItem) => {
    filterItem.checked = checked;
  });
};

const checkedFilters = (filterCategory) => {
  let filterValues = [];
  for (let i = 0; i < filterCategory.length; i++) {
    if (filterCategory[i].checked) {
      filterValues.push(filterCategory[i].value);
    }
  }
  return filterValues;
};

function changePage(){
    html.menuHamburguer.addEventListener("click", () => {
        html.menuHamburguerItems.classList.toggle("show");
    });

    html.filterButton.addEventListener("click", () => {
        html.filterOptions.classList.toggle("show");
    });
    
    html.menuMoreAboutButton.addEventListener("click", () => {
      html.home.classList.add("page-disabled");
      html.charactersPage.classList.add("page-disabled");
      html.moreAboutPage.classList.remove("page-disabled");
      html.menuHamburguerItems.classList.remove("show");
    });

    html.menuCharactersPageButton.addEventListener("click", loadCharactersPage);

    html.backToCharactersPage.addEventListener("click", loadCharactersPage);

    html.filterValuesButton.addEventListener("click", (event) => {
        event.preventDefault();
        pageDefinitions.page = 1;
        searchDefinitions.searchOrder = "empty";
        searchDefinitions.searchOrder = "empty";
        html.chooseSortOrder.value = "empty";
        html.showPercentage.innerHTML = "";
        html.showPercentage.classList.remove("page-disabled");
        html.filterOptions.classList.remove("show");
        html.charactersPage.classList.add("page-disabled");
        html.paginationButtonControls.classList.add("page-disabled")
        html.paragraphNoResults.classList.add("page-disabled");
        searchDefinitions.searchFilter = checkedFilters(html.filterCheckbox);
        update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter);
        buttonsControls.createListeners();
        html.numberOfPages.innerHTML = "";
        createItemsIndex();
    });

    html.searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        if(html.searchText.value === ""){
            alert("Digite um nome para sua pesquisa!")
        }else{
            if(!html.home.classList.contains("page-disabled")){
                html.home.classList.add('page-disabled');
            }
            html.charactersPage.classList.add("page-disabled");
            html.paginationButtonControls.classList.add("page-disabled")
            html.paragraphNoResults.classList.add("page-disabled");
            html.moreAboutPage.classList.add("page-disabled");
            pageDefinitions.page = 1;
            searchDefinitions.searchOrder = "empty";
            html.chooseSortOrder.value = "empty";
            html.numberOfPages.innerHTML = "";
            html.showPercentage.innerHTML = "";
            html.showPercentage.classList.remove("page-disabled");
            searchDefinitions.searchText = html.searchText.value;
            uncheckFilters();
            searchDefinitions.searchFilter = "";
            html.filterOptions.classList.remove("show"); 
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter);
            html.numberOfPages.innerHTML = "";
            createItemsIndex(); 

            if(pageDefinitions.totalPage > 1){
              html.paginationButtonControls.classList.remove("page-disabled")
              buttonsControls.createListeners();
            }          
        }
    });
    
    html.chooseSortOrder.addEventListener("change", (event) => {
        pageDefinitions.page = 1;
        searchDefinitions.searchText = html.searchText.value;
        searchDefinitions.searchOrder = event.target.value;
        update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
        buttonsControls.createListeners();
        html.numberOfPages.innerHTML = "";
        html.showPercentage.classList.add("page-disabled");
        createItemsIndex();
    });

    html.menuHomeButton.addEventListener("click", loadHomePage);

    html.homeByLogoImage.addEventListener("click", loadHomePage);

    html.clearFilterOptions.addEventListener("click", () => {
      uncheckFilters();
    });
}

const pageDefinitions = {
    page: 1,
    perPage: 12,
    totalPage: 0,
    totalItems: 0,
};

const searchDefinitions = {
    searchText: "",
    searchOrder: "empty",
    searchFilter: "",
};

function firstPagePrintCard(card) {
    let firstPageCards = html.homePageCharactersList;
    firstPageCards.innerHTML = printCard(card);
}

function charactersPagePrintCard(card) {
    let charactersCards = html.charactersList;
    charactersCards.innerHTML = printCard(card);
}

function printCard(card) {
  let cards = "";
  const totalEpisodes = 31;
  for (let eachCard of card) {
    cards += `
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
            <li class="item">
                <img class="image" src=${eachCard.image}>
                <p class="name"><b>${eachCard.name}</b></p>
                <p class="species"><b>${eachCard.species}</b></p>
                <p class="status"><b>Status:</b> ${eachCard.status}</p>
                <p class="gender"><b>Gênero:</b> ${eachCard.gender}</p>
            </li>
            </div>

            <div class="back">
            <li class="item">
            <p class=${eachCard.type === "" ? "page-disabled" : "type"}><b>Type:</b> ${eachCard.type}</p>
            <p class="origin"><b>Origem:</b> ${eachCard.origin.name}</p>
            <p class="location"><b>Última localização:</b> ${eachCard.location.name}</p>
            <p class="episode"><b>Número de episódios em que aparece:</b> ${eachCard.episode.length}</p>
            <p class="percentage-episodes"><b>Porcentagem de episódios em que aparece:</b> ${computeStats(totalEpisodes, eachCard.episode.length)}%</p>
            </li>
            </div>
          </div>
      </div>`
    }
    return cards;
}
    // let firstEpisodeAppeared;

    // <p class="first-episode-name">Primeiro (ou único) episódio que aparece: ${firstEpisode.name}</p>
    // <p class=${lastEpisode.name === firstEpisode.name ? "page-disabled" : "last-episode-name"}>Último episódio que aparece: ${lastEpisode.name}</p>

    // fetch(card.episode[0])
    //     .then(response => response.json())
    //     .then(function(data){
    //         let nameFirstEpisode = document.createElement("p");
    //         firstEpisodeAppeared = data.name
    //         nameFirstEpisode.appendChild(document.createTextNode("First (or only) episode in wich it appears: "+data.name));
    //         listItem.appendChild(nameFirstEpisode);
    //     })
    
    // fetch(card.episode[card.episode.length-1])
    //     .then(response => response.json())
    //     .then(function(data){
    //         if(data.name !== firstEpisodeAppeared){
    //             let nameLastEpisode = document.createElement("p");
    //             nameLastEpisode.appendChild(document.createTextNode("Last episode in wich it appears: "+data.name));
    //             listItem.appendChild(nameLastEpisode);
    //         }
    //     })


const buttonsNumbers = {
  calculateMaxVisible() {
    let maxVisibleButtons = 5;
    let maxLeft = (pageDefinitions.page - Math.floor(maxVisibleButtons / 2));
    let maxRight = (pageDefinitions.page + Math.floor(maxVisibleButtons / 2));
    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }
    if (maxRight > pageDefinitions.totalPage) {
      maxLeft = pageDefinitions.totalPage - (maxVisibleButtons - 1);
      maxRight = pageDefinitions.totalPage;
      if (maxLeft < 1) {
        maxLeft = 1;
      }
    }
    return {
      maxLeft,
      maxRight
    };
  },

  update() {
    const {
      maxLeft,
      maxRight,
    } = buttonsNumbers.calculateMaxVisible();
    html.paginateNumbers.innerHTML = "";

    if(maxRight!==1){
      for (let actualPage = maxLeft; actualPage <= maxRight; actualPage++) {
        buttonsNumbers.create(actualPage);
      }
    }
  },
  create(number) {
    const button = document.createElement("button");
    button.innerHTML = number;

    button.addEventListener("click", (event) => {
      const page = event.target.innerText;
      buttonsControls.goTo(page);
      update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
      buttonsNumbers.update();
    })

    html.paginateNumbers.appendChild(button);
  }
}

const buttonsControls = {
  next() {
    pageDefinitions.page++;
    if (pageDefinitions.page > pageDefinitions.totalPage) {
      pageDefinitions.page--;
    }
  },
  prev() {
    pageDefinitions.page--;
    if (pageDefinitions.page < 1) {
      pageDefinitions.page++;
    }
  },
  goTo(pageOnClick) {
    if (pageDefinitions.page < 1) {
      pageDefinitions.page = 1;
    }
    pageDefinitions.page = Number(pageOnClick);
    if (pageDefinitions.page > pageDefinitions.totalPage) {
      pageDefinitions.page = pageDefinitions.TotalPage;
    }
  },
  createListeners() {
    html.paginateFirstPageButton.addEventListener("click", () => {
      buttonsControls.goTo(1);
      update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
    })
    html.paginateLastPageButton.addEventListener("click", () => {
      buttonsControls.goTo(pageDefinitions.totalPage);
      update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
    })
    html.paginateNextPageButton.addEventListener("click", () => {
      buttonsControls.next();
      update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
    })
    html.paginatePreviousPageButton.addEventListener("click", () => {
      buttonsControls.prev();
      update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
    })
  }
}

function createItemsIndex() {
  const numberOfPages = html.numberOfPages;
  if (pageDefinitions.totalPage > 1) {
    numberOfPages.innerHTML = "Página " + pageDefinitions.page + " de " + pageDefinitions.totalPage;
  }

  const textItems = html.textItemsIndex;
  const initialItem = (pageDefinitions.perPage*(pageDefinitions.page-1))+1;
  const finalItem = initialItem+(pageDefinitions.perPage-1);
  if(pageDefinitions.totalItems >= 1 && pageDefinitions.totalItems < pageDefinitions.perPage){
      textItems.innerHTML = 1 + "-" + pageDefinitions.totalItems + " de " + pageDefinitions.totalItems + " personagens";
  }else if(pageDefinitions.totalItems >= pageDefinitions.perPage){
      if(pageDefinitions.page === pageDefinitions.totalPage){
          textItems.innerHTML = initialItem + "-" + pageDefinitions.totalItems + " de " + pageDefinitions.totalItems + " personagens";
      }else{
          textItems.innerHTML = initialItem + "-" + finalItem + " de " + pageDefinitions.totalItems + " personagens";
      }
  }
}

const update = {
    firstPage() {
        const firstPageItems = data.results.slice(0, 5);
        firstPagePrintCard(firstPageItems)
    },
    paginateResults(data) {
        if(data.length){
          html.charactersList.innerHTML = ""; 
          let paging = pageDefinitions.page - 1;
          let start = paging * pageDefinitions.perPage;
          let end = start + pageDefinitions.perPage;
          const dataSlice = data.slice(start, end)
          
          pageDefinitions.totalItems = data.length;
          pageDefinitions.totalPage = Math.ceil(pageDefinitions.totalItems/pageDefinitions.perPage)
  
          charactersPagePrintCard(dataSlice);
          window.scrollTo(0,0);
          buttonsNumbers.update();
          createItemsIndex();
          html.charactersPage.classList.remove("page-disabled");
        }else{
          html.paragraphNoResults.classList.remove("page-disabled");
        }
        
    },
    charactersPage(searchText, searchFilter, sortOrder = "empty") {
        let dataForPaginate = data.results.slice();
        let filterData = [];
        let dataSpeciesFilter = [];
        let dataStatusFilter = [];
        let dataGenderFilter = [];
        
        if(searchText){
            dataForPaginate = search(dataForPaginate, "name", searchText);
        }
        if (searchFilter) {
          for (let eachSearchFilter of searchFilter) {
            if (eachSearchFilter === "human" || eachSearchFilter === "alien" || eachSearchFilter === "unknown") {
                dataSpeciesFilter = dataSpeciesFilter.concat(filter(dataForPaginate, "species", eachSearchFilter));
                filterData = dataSpeciesFilter;
            }
            if (eachSearchFilter === "alive" || eachSearchFilter === "dead" || eachSearchFilter === "unknown-status") {
                if (filterData.length !== 0 && dataStatusFilter.length === 0) {
                    dataForPaginate = filterData;
                }
                (eachSearchFilter === "unknown-status") ?
                dataStatusFilter = dataStatusFilter.concat(filter(dataForPaginate, "status", "unknown")):
                    dataStatusFilter = dataStatusFilter.concat(filter(dataForPaginate, "status", eachSearchFilter));
                filterData = dataStatusFilter;
            }
            if (eachSearchFilter === "female" || eachSearchFilter === "male" || eachSearchFilter === "genderless" || eachSearchFilter === "unknown-gender") {
                if (filterData.length !== 0 && dataGenderFilter.length === 0) {
                    dataForPaginate = filterData;
                }
                (eachSearchFilter === "unknown-gender") ?
                dataGenderFilter = dataGenderFilter.concat(filter(dataForPaginate, "gender", "unknown")):
                dataGenderFilter = dataGenderFilter.concat(filter(dataForPaginate, "gender", eachSearchFilter));
                filterData = dataGenderFilter;
            }
      }
      dataForPaginate = filterData
    }

    if (sortOrder !== "empty") {
      if(sortOrder === "ascLetter" || sortOrder === "descLetter"){
        dataForPaginate = sortData(dataForPaginate, "name", sortOrder);
      }else{
        dataForPaginate = sortDataArrayLength(dataForPaginate, "episode", sortOrder)
      }
    } else {
      dataForPaginate = sortData(dataForPaginate, "id", "ascLetter");
    }

    update.paginateResults(dataForPaginate);
    if(searchFilter){
      update.createStatistics(dataForPaginate, searchFilter);
    }else if(searchText){
      update.createStatistics(dataForPaginate, searchText);
    }
  },
  createStatistics(filterData, filterDataName){
    const percentage = computeStats(data.results.length, filterData.length);
    html.showPercentage.innerHTML = `Sua pesquisa "${typeof filterDataName === Object ? filterDataName.join(", ") : filterDataName}" retornou ${percentage}% dos personagens`;
  }
}



function init() {
  update.firstPage();
}

init();
changePage();
