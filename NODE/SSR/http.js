const http = require('http');
const getdata = async () => {
  const pr = await fetch('https://dummyjson.com/products');
  const data = await pr.json();
  console.log(data.products[0].id);
  return data.products;
};

const server = http.createServer(async (req, res) => {
  //   res.setHeader('content-type', 'text/plain');   // it prints the respones as it is
  res.setHeader('content-type', 'text/html');
  const path = req.url;
  if (path == '/') {
    const data = await getdata();
    let html = '';
    for (let i = 0; i < data.length; i++) {
      html += `
      <div style="background-color:lightgreen;display:grid;">
      <h1>${data[i].title}</h1>
      <p>${data[i].description}</p>
      </div>`;
    }
    res.end(html);
  } else if (path == '/about') {
    res.end('welcome to about us page');
  } else {
    res.end('page not found');
  }
});

server.listen(2005, () => {
  console.log('server started');
});