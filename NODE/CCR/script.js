const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}; // :: returns a promise
// :: which completes when the last line of that function executes
//    OR something is return
// :: the promises returns the data which is returned in the function

const getCardUI = (products) => {
    const root = document.getElementById("root");

    products.forEach((elem) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${elem.title}</h4>
            <img src='${elem.thumbnail}' />
            <p>${elem.description}</p>
            <a href='/view?id=${elem.id}'>More...</a>
        `;
        root.appendChild(card);
    });
};

const renderUI = async () => {
    const products = await getData();
    getCardUI(products);
};

renderUI();