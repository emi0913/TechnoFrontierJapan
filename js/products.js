const products = [
  {
    name: "アルミ形材",
    image: "images/product01.jpg",
    material: "A6063",
    description: "さまざまな形状に対応できるアルミ押出材です。"
  },
  {
    name: "ヒートシンク",
    image: "images/product02.jpg",
    material: "A6063",
    description: "電子機器の放熱用途に使用される製品です。"
  },
  {
    name: "加工製品",
    image: "images/product03.jpg",
    material: "A6063",
    description: "切断や穴あけなどの加工にも対応します。"
  }
];

const productList = document.getElementById("productList");

products.forEach((product) => {
  const productCard = document.createElement("article");

  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-card-body">
      <h3>${product.name}</h3>
      <p>材質：${product.material}</p>
      <p>${product.description}</p>
      <button type="button">詳しく見る</button>
    </div>
  `;

  productList.appendChild(productCard);
});