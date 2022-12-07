export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '26160fa9c2msh714175ba676e9c6p18c490jsn10abdba15b39',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };

  

export const fetchData = async (url,options) =>  {
    const res = await fetch(url,options);
    const data = await res.json();

    return data;
};