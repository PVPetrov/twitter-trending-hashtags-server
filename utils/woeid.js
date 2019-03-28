import countries from './countries.json';

export const getWoeid = ( countryList = [] ) => {
  return countryList.map( country => findCountry(country).woeid);
}

export const findCountry = (country) => countries.find( c => Object.values(c).includes(country));