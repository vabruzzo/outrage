import tweets from '../data/tweets';
import { Tweet } from '../components/App/App';

const get = () => null;

const mockGet = async (): Promise<Tweet[]> => {
  const subsetTweets = tweets;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(subsetTweets);
    }, 500);
  });
};

export { get, mockGet };
