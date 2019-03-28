import config from './config';
import Twit from 'twit';

const T = new Twit(config.twitter);

export default T;