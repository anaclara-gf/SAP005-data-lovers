import { sortData, search } from '../src/data.js';


describe('sortData', () => {
  it('should be a function', () => {
    expect(typeof sortData).toBe('function');
  });

  const data = [
    {
      "name":"y"
    },
    {
      "name":"b"
    },
    {
      "name":"e"
    }
  ];
  const resultAsc = [
    {
      "name":"b"
    },
    {
      "name":"e"
    },
    {
      "name":"y"
    }
  ];
  const resultDesc = [
    {
      "name":"y"
    },
    {
      "name":"e"
    },
    {
      "name":"b"
    }
  ];
  it('should return the value in alphabetic order for the key "name"', () => {
    expect(sortData(data, "name", "asc")).toStrictEqual(resultAsc);
  });
  it('should return the value in reverse alphabetic order for the key "name"', () => {
    expect(sortData(data, "name", "desc")).toStrictEqual(resultDesc);
  });
});


describe('search', () => {
  it('should be a function', () => {
    expect(typeof search).toBe('function');
  });

  const data = [
    {
      "name": "Ana Beatriz", 
      "age":"22"
    }, 
    {
      "name": "Carina", 
      "age":"29"
    }, 
    {
      "name": "MARIA Clara", 
      "age":"21"
    }, 
    {
      "name": "Elis", 
      "age":"26"
    }, 
    {
      "name": "Julia MariA", 
      "age":"30"
    }, 
    {
      "name": "Gabriela", 
      "age":"23"
    }, 
    {
      "name": "Maria Aparecida", 
      "age":"21"
    }
  ];
  const result = [
    {
      "name": "MARIA Clara", 
    "age":"21"
    }, 
    {
      "name": "Julia MariA", 
      "age":"30"
    }, 
    {
      "name": "Maria Aparecida", 
      "age":"21"
    }
  ];
  it('should return an array of objects with the result of the search (not to be case sensitive)', () => {
    expect(search(data, "name", "maria")).toStrictEqual(result);
  });
});
