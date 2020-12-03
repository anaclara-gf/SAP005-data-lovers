import { sortData, search, filter } from '../src/data.js';

const data = [
  {
    "name": "Ana Beatriz", 
    "age":"22",
    "occupation":"teacher",
    "status":"married",
    "nacionality":"Brazilian",
  }, 
  {
    "name": "Elis", 
    "age":"26",
    "occupation":"designer",
    "status":"married",
    "nacionality":"Mexican",
  }, 
  {
    "name": "Carina", 
    "age":"29",
    "occupation":"architect",
    "status":"single",
    "nacionality":"Mexican",
  }, 
  {
    "name": "Maria Clara", 
    "age":"21",
    "occupation":"designer",
    "status":"divorced",
    "nacionality":"Brazilian",
  }, 
  {
    "name": "Julia Maria", 
    "age":"30",
    "occupation":"teacher",
    "status":"single",
    "nacionality":"Brazilian",
  }, 
  {
    "name": "Gabriela", 
    "age":"23",
    "occupation":"architect",
    "status":"divorced",
    "nacionality":"Brazilian",
  }, 
  {
    "name": "Maria Aparecida", 
    "age":"21",
    "occupation":"designer",
    "status":"single",
    "nacionality":"Mexican",
  }
];

describe('sortData', () => {
  it('should be a function', () => {
    expect(typeof sortData).toBe('function');
  });

  const resultAsc = [
    {
      "name": "Ana Beatriz", 
      "age":"22",
      "occupation":"teacher",
      "status":"married",
      "nacionality":"Brazilian",
    }, 
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
    }, 
    {
      "name": "Elis", 
      "age":"26",
      "occupation":"designer",
      "status":"married",
      "nacionality":"Mexican",
    }, 
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
    },
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
    }, 
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
    }, 
  ];
  const resultDesc = [
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
    }, 
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
    },
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
    }, 
    {
      "name": "Elis", 
      "age":"26",
      "occupation":"designer",
      "status":"married",
      "nacionality":"Mexican",
    }, 
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
    }, 
    {
      "name": "Ana Beatriz", 
      "age":"22",
      "occupation":"teacher",
      "status":"married",
      "nacionality":"Brazilian",
    }, 
  ];
  it('should return all objects with the value in alphabetic order for the key "name"', () => {
    expect(sortData(data, "name", "asc")).toStrictEqual(resultAsc);
  });
  it('should return all objects with the value in reverse alphabetic order for the key "name"', () => {
    expect(sortData(data, "name", "desc")).toStrictEqual(resultDesc);
  });
});

describe('search', () => {
  it('should be a function', () => {
    expect(typeof search).toBe('function');
  });

  const result = [
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
    },
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
    }, 
  ];

  it('should return all objects with the result of the search "maria"', () => {
    expect(search(data, "name", "maria")).toStrictEqual(result);
  });
});

describe('filter', () => {
  it('should be a function', () => {
    expect(typeof filter).toBe('function');
  });

  const resultNacionality = [
    {
      "name": "Elis", 
      "age":"26",
      "occupation":"designer",
      "status":"married",
      "nacionality":"Mexican",
    }, 
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
    },
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
    },
  ];

  const resultStatus = [
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
    }, 
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
    }, 
  ];

  it('should return all objects with the value "Mexican" to the key "nacionality"', () => {
    expect(filter(data, "nacionality", "Mexican")).toStrictEqual(resultNacionality);
  });

  it('should return all objects with the value "divorced" to the key "status"', () => {
    expect(filter(data, "status", "divorced")).toStrictEqual(resultStatus)
  });
});

