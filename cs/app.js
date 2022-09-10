import fetch from 'node-fetch';

async function get() {
  const response = await fetch('http://localhost:1323/show?name=text&data=123')
  const data = await response.text();
  console.log(data);
}
get()
