const http = require('http');
const fs = require('fs/promises');
const url = require('url');

const getdata = async () => {
  const pr = await fetch('https://dummyjson.com/products');
  const data = await pr.json();
  return data.products;
};

const getCards = (products) => {
  let html = '';
  products.forEach((element) => {
    html += `
    <div class="card">
    <h1 class="title">${element.title}</h1>
      <p class="desc">${element.description}</p>
       <a href='/view?id=${element.id}'><button class="button">more...</button></a>
      </div>
      `;
  });
  return html;
};

const moredetails = (product) => {
  let html1 = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./styles1.css">
  </head>
  <body>
      <div class="card">
      <h1 class="title">${product.title}</h1>
      <img src=${product.thumbnail}>
      <p class="price">price: $${product.price}</p>
      <p class="desc">${product.description}</p>
      <a href="/"><button class="button">home</button></a>
    </div>
  </body>
  </html>
  `;

  return html1;
};

const server = http.createServer(async (req, res) => {
  // const path = req.url;
  const { path, query } = url.parse(req.url, true);
  console.log(path);
  const [path1, qu] = path.split('?');
  console.log(path1);
  if (path == '/') {
    const products = await getdata();
    const show = await getCards(products);
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Node</title>
            <link rel='stylesheet' href='./styles1.css'>
        </head>
        <body>
            ${show}
        </body>
        </html>`);
  } else if (path == '/contact') {
    res.end('contact page');
  } else if (path1 == '/view') {
    res.setHeader('content-type', 'text/html');
    const products = await getdata();
    const productSingle = products.find((prdt) => prdt.id == query.id);
    console.log(productSingle);
    res.end(moredetails(productSingle));
  } else if (path == '/styles1.css') {
    try {
      res.setHeader('content-type', 'text/css');
      const data = await fs.readFile('./styles1.css');
      res.end(data);
    } catch (error) {
      console.log(error);
    }
  }
});

server.listen(2025, () => {
  console.log('server started');
});