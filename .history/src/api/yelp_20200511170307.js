import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'BearerfYynt41GshgLLCAwXoEP9jewFzckc5dQXU_6CQn0GsgX0kMvFDQRVJ968XQJ40s2EJHGHrEEzK5pueczb3exguUkkPG42KdH1OZ2boS-DU6Z41ZAx1bq4KvJWGC5XnYx',
  },
});
