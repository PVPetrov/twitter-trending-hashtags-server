import woeid from 'woeid';
import T from '../twit';
import { getWoeid } from '../utils/woeid';

export const getTrendsByCountry = async(req, res, next) => {

  const countries = req.query.countries;

  try{
    const promises = getWoeid(countries).map( code => getTrendByWoeid(code));
    Promise.all(promises)
      .then( data => res.send(data))
      .catch(err => next(err));
  }catch(err){
    next(err);
  }
}

const getTrendByWoeid = async woeid => {
  return await T.get(`https://api.twitter.com/1.1/trends/place.json?id=${woeid}`)
    .then(response => response.data[0])
    .catch(err => err);
}