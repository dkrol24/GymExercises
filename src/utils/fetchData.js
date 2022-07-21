export const exerciseOptions = {
  method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': 'e29b09045cmsh11e9d65b43e44ccp11bed5jsnceadf53dec4c',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e29b09045cmsh11e9d65b43e44ccp11bed5jsnceadf53dec4c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};