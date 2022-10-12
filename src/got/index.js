import got from 'got';

const url = 'https://httpbin.org/anything';

const options = {
  headers: {
    'Custom-Header': 'Quick start',
  },
  timeout: {
    send: 3500
  },
};

const data = await got(url, options).json();
console.log(data)
