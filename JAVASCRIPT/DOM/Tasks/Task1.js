const main_page1 = document.getElementsByClassName('main-section')[0];

const showdata = (data) => {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement('div');
    div.className = 'card';

    const image = document.createElement('img');
    image.src = `${data[i].images[0]}`;
    image.className = 'card-images';

    const div2 = document.createElement('div');
    div2.className = 'image-container';
    div2.appendChild(image);

    div.appendChild(div2);

    const heading = document.createElement('h1');
    heading.innerHTML = `${data[i].title}`;
    heading.className = 'card-heading';
    div.appendChild(heading);

    const para = document.createElement('p');
    para.innerHTML = `${data[i].description}`;
    para.className = 'card-para';
    div.appendChild(para);

    const button1 = document.createElement('button');
    button1.className = 'card-button';
    button1.innerText = 'Add to cart';

    button1.addEventListener('click', () => {
      alert('Product added to the cart sucessfully....');
    });

    button1.addEventListener('mouseenter', () => {
      console.log('Mouse Entered...');
    });

    button1.addEventListener('mouseleave', () => {
      console.log('mouse leaved...');
    });

    const div3 = document.createElement('div');
    div3.className = 'button-container';
    div3.appendChild(button1);

    div.appendChild(div3);
    main_page1.appendChild(div);
  }
};
const getdata = async () => {
  try {
    const pr = await fetch('https://dummyjson.com/products');
    const pr2 = await pr.json();
    showdata(pr2.products);
  } catch {}
};

getdata();
