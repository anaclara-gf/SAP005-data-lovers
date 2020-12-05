import { sortData, sortDataArrayLength, search, filter, computeStats } from '../src/data.js';

const data = [
  {
    "name": "Ana Beatriz", 
    "age":"22",
    "occupation":"teacher",
    "status":"married",
    "nacionality":"Brazilian",
    "travelsLocations": ["Paris", "Rome", "Rio de Janeiro", "Miami"],
  }, 
  {
    "name": "Elis", 
    "age":"26",
    "occupation":"designer",
    "status":"married",
    "nacionality":"Mexican",
    "travelsLocations": ["Ciudad de Mexico", "Texas", "Santiago"],
  }, 
  {
    "name": "Carina", 
    "age":"29",
    "occupation":"architect",
    "status":"single",
    "nacionality":"Mexican",
    "travelsLocations": ["Paris", "New York", "Guadalajara", "London", "Tijuana", "Los Angeles"],
  }, 
  {
    "name": "Maria Clara", 
    "age":"21",
    "occupation":"designer",
    "status":"divorced",
    "nacionality":"Brazilian",
    "travelsLocations": ["Rio de Janeiro", "Belo Horizonte"],
  }, 
  {
    "name": "Julia Maria", 
    "age":"30",
    "occupation":"teacher",
    "status":"single",
    "nacionality":"Brazilian",
    "travelsLocations": ["London", "São Paulo", "Rio de Janeiro", "Toronto", "Dubai"],
  }, 
  {
    "name": "Gabriela", 
    "age":"23",
    "occupation":"architect",
    "status":"divorced",
    "nacionality":"Brazilian",
    "travelsLocations": ["Manaus", "Belém", "Rio de Janeiro", "Miami", "San Diego", "Los Angeles", "Vancouver"],
  }, 
  {
    "name": "Maria Aparecida", 
    "age":"21",
    "occupation":"designer",
    "status":"single",
    "nacionality":"Mexican",
    "travelsLocations": ["Monterrey"],
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
      "travelsLocations": ["Paris", "Rome", "Rio de Janeiro", "Miami"],
    }, 
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Paris", "New York", "Guadalajara", "London", "Tijuana", "Los Angeles"],
    }, 
    {
      "name": "Elis", 
      "age":"26",
      "occupation":"designer",
      "status":"married",
      "nacionality":"Mexican",
      "travelsLocations": ["Ciudad de Mexico", "Texas", "Santiago"],
    }, 
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Manaus", "Belém", "Rio de Janeiro", "Miami", "San Diego", "Los Angeles", "Vancouver"],
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
      "travelsLocations": ["London", "São Paulo", "Rio de Janeiro", "Toronto", "Dubai"],
    },
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Monterrey"],
    }, 
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Rio de Janeiro", "Belo Horizonte"],
    }, 
  ];
  const resultDesc = [
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Rio de Janeiro", "Belo Horizonte"],
    }, 
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Monterrey"],
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
      "travelsLocations": ["London", "São Paulo", "Rio de Janeiro", "Toronto", "Dubai"],
    },
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Manaus", "Belém", "Rio de Janeiro", "Miami", "San Diego", "Los Angeles", "Vancouver"],
    }, 
    {
      "name": "Elis", 
      "age":"26",
      "occupation":"designer",
      "status":"married",
      "nacionality":"Mexican",
      "travelsLocations": ["Ciudad de Mexico", "Texas", "Santiago"],
    }, 
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Paris", "New York", "Guadalajara", "London", "Tijuana", "Los Angeles"],
    }, 
    {
      "name": "Ana Beatriz", 
      "age":"22",
      "occupation":"teacher",
      "status":"married",
      "nacionality":"Brazilian",
      "travelsLocations": ["Paris", "Rome", "Rio de Janeiro", "Miami"],
    }, 
  ];
  it('should return all objects with the value in alphabetic order for the key "name"', () => {
    expect(sortData(data, "name", "ascLetter")).toStrictEqual(resultAsc);
  });
  it('should return all objects with the value in reverse alphabetic order for the key "name"', () => {
    expect(sortData(data, "name", "descLetter")).toStrictEqual(resultDesc);
  });
});

describe('sortDataArrayLenght', () => {
  it('should be a function', () => {
    expect(typeof sortDataArrayLength).toBe('function');
  });
  
  const resultAsc = [
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Monterrey"],
    }, 
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Rio de Janeiro", "Belo Horizonte"],
    }, 
    {
      "name": "Elis", 
      "age":"26",
      "occupation":"designer",
      "status":"married",
      "nacionality":"Mexican",
      "travelsLocations": ["Ciudad de Mexico", "Texas", "Santiago"],
    }, 
    {
      "name": "Ana Beatriz", 
      "age":"22",
      "occupation":"teacher",
      "status":"married",
      "nacionality":"Brazilian",
      "travelsLocations": ["Paris", "Rome", "Rio de Janeiro", "Miami"],
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
      "travelsLocations": ["London", "São Paulo", "Rio de Janeiro", "Toronto", "Dubai"],
    },
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Paris", "New York", "Guadalajara", "London", "Tijuana", "Los Angeles"],
    }, 
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Manaus", "Belém", "Rio de Janeiro", "Miami", "San Diego", "Los Angeles", "Vancouver"],
    }, 
  ];
  const resultDesc = [
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Manaus", "Belém", "Rio de Janeiro", "Miami", "San Diego", "Los Angeles", "Vancouver"],
    }, 
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Paris", "New York", "Guadalajara", "London", "Tijuana", "Los Angeles"],
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
      "travelsLocations": ["London", "São Paulo", "Rio de Janeiro", "Toronto", "Dubai"],
    },
    {
      "name": "Ana Beatriz", 
      "age":"22",
      "occupation":"teacher",
      "status":"married",
      "nacionality":"Brazilian",
      "travelsLocations": ["Paris", "Rome", "Rio de Janeiro", "Miami"],
    }, 
    {
      "name": "Elis", 
      "age":"26",
      "occupation":"designer",
      "status":"married",
      "nacionality":"Mexican",
      "travelsLocations": ["Ciudad de Mexico", "Texas", "Santiago"],
    }, 
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Rio de Janeiro", "Belo Horizonte"],
    }, 
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Monterrey"],
    }, 
  ];
  it('should return all objects with the value in numeric order for the length of the key "travelsLocations"', () => {
    expect(sortDataArrayLength(data, "travelsLocations", "ascNumber")).toStrictEqual(resultAsc);
  });
  it('should return all objects with the value in reverse numeric order for the length of the key "travelsLocations"', () => {
    expect(sortDataArrayLength(data, "travelsLocations", "descNumber")).toStrictEqual(resultDesc);
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
      "travelsLocations": ["Rio de Janeiro", "Belo Horizonte"],
    }, 
    {
      "name": "Julia Maria", 
      "age":"30",
      "occupation":"teacher",
      "status":"single",
      "nacionality":"Brazilian",
      "travelsLocations": ["London", "São Paulo", "Rio de Janeiro", "Toronto", "Dubai"],
    },
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Monterrey"],
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
      "travelsLocations": ["Ciudad de Mexico", "Texas", "Santiago"],
    }, 
    {
      "name": "Carina", 
      "age":"29",
      "occupation":"architect",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Paris", "New York", "Guadalajara", "London", "Tijuana", "Los Angeles"],
    },
    {
      "name": "Maria Aparecida", 
      "age":"21",
      "occupation":"designer",
      "status":"single",
      "nacionality":"Mexican",
      "travelsLocations": ["Monterrey"],
    },
  ];
  const resultStatus = [
    {
      "name": "Maria Clara", 
      "age":"21",
      "occupation":"designer",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Rio de Janeiro", "Belo Horizonte"],
    }, 
    {
      "name": "Gabriela", 
      "age":"23",
      "occupation":"architect",
      "status":"divorced",
      "nacionality":"Brazilian",
      "travelsLocations": ["Manaus", "Belém", "Rio de Janeiro", "Miami", "San Diego", "Los Angeles", "Vancouver"],
    }, 
  ];

  it('should return all objects with the value "Mexican" to the key "nacionality"', () => {
    expect(filter(data, "nacionality", "Mexican")).toStrictEqual(resultNacionality);
  });

  it('should return all objects with the value "divorced" to the key "status"', () => {
    expect(filter(data, "status", "divorced")).toStrictEqual(resultStatus)
  });
});

describe('computeStats', () => {
  it('should be a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('should return 56,32 (%) for 140,8 of 250', () => {
    expect(computeStats(250, 140.8)).toBe("56.32")
  });
});