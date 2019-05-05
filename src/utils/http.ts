import tweets from '../data/tweets';

const get = () => null;

const mockGet = async () => {
  const subsetTweets = tweets;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(subsetTweets);
    }, 500);
  });
};

export { get, mockGet };
