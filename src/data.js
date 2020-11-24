export const sortData = (data, sortBy, sortOrder) => {
  const innerSort = (a,b) => {
    const varA = a[sortBy];
    const varB = b[sortBy];

    let comparison = 0;
    if(varA>varB){
      comparison = 1;
    } else if(varA<varB){
      comparison = -1;
    }

    return (sortOrder === "desc") ? (comparison * -1) : comparison
  };
  data.sort(innerSort);
};

export const search = (data, searchBy, searchText) => {
  const searchInData = (item) => {
    if(item[searchBy].includes(searchText)) {
      return true;
    }else {
      return false;
    }
  };

  return data.filter(searchInData);
};

//

function checkHuman(character){
  return character.species == "Human";
}
function checkAlien(character){
  return character.species == "Alien";
}
function checkUnknown(character){
  return character.species == "unknown";
}
function checkAlive(character){
  return character.status == "Alive";
}
function checkDead(character){
  return character.status == "Dead";
}
function checkUnknown(character){
  return character.status == "unknown";
}
function checkFemale(character){
  return character.gender == "Female";
}
function checkMale(character){
  return character.gender == "Male";
}
function checkUnknown(character){
  return character.gender == "unknown";
}
function returnAllCharacters(){
  return true;
}
export function filterData(data, condition){
  let dataFilter = []
  if(condition == "human"){
      dataFilter = data.filter(checkHuman);
  }else if(condition == "alien"){
      dataFilter = data.filter(checkAlien);
  }else if(condition == "unknown"){
      dataFilter = data.filter(checkUnknown);
  }else if(condition == "alive"){
      dataFilter = data.filter(checkAlive);
  }else if(condition == "dead"){
      dataFilter = data.filter(checkDead);
  }else if(condition == "unknown-status"){
      dataFilter = data.filter(checkUnknown);
  }else if(condition == "female"){
      dataFilter = data.filter(checkFemale);
  }else if(condition == "male"){
      dataFilter = data.filter(checkMale);
  }else if(condition == "unknown-gender"){
      dataFilter = data.filter(checkGenderUnknown);
  }else{
      dataFilter = data.filter(returnAllCharacters);
  }
  return dataFilter;
}


export function status(data, condition){
  let dataStatus = ""
  if(condition == "human"){
    dataStatus = data.filter(checkHuman).length;
  }else if(condition == "alien"){
    dataStatus = data.filter(checkAlien).length;
  }else if(condition == "unknown"){
    dataStatus = data.filter(checkUnknown).length;
  }else if(condition == "alive"){
    dataStatus = data.filter(checkAlive).length;
  }else if(condition == "dead"){
    dataStatus = data.filter(checkDead).length
  }else if(condition == "unknown-status"){
    dataStatus = data.filter(checkUnknown).length;
  }else if(condition == "female"){
    dataStatus = data.filter(checkFemale).length;
  }else if(condition == "male"){
    dataStatus = data.filter(checkMale).length;
  }else if(condition == "unknown-gender"){
    dataStatus = data.filter(checkUnknown).length;
  }
  return dataStatus;
}

