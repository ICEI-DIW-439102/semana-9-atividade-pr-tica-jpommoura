const PRODUCTS = [
  {
    id: 1,
    nome: "Tênis Trail Runner Pro",
    preco: 389.90,
    categoria: "Calçados",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    descricao: "Tênis para trilhas com solado de borracha antiderrapante, cabedal em mesh respirável e amortecimento de alta performance. Ideal para corridas em terreno irregular.",
    estoque: 12
  },
  {
    id: 2,
    nome: "Mochila Urbana Slim",
    preco: 219.00,
    categoria: "Acessórios",
    imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    descricao: "Mochila compacta para o dia a dia, com compartimento acolchoado para notebook até 15\", bolsos organizadores e alças ergonômicas ajustáveis.",
    estoque: 5
  },
  {
    id: 3,
    nome: "Headphone Wireless NC",
    preco: 549.90,
    categoria: "Eletrônicos",
    imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    descricao: "Headphone over-ear com cancelamento ativo de ruído, até 30h de bateria, áudio Hi-Res e conexão Bluetooth 5.2. Som imersivo onde quer que você vá.",
    estoque: 8
  },
  {
    id: 4,
    nome: "Camiseta Dry-Fit Performance",
    preco: 89.90,
    categoria: "Vestuário",
    imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    descricao: "Camiseta técnica de secagem rápida com proteção UV50+, tecido antimicrobiano e corte ergonômico para máxima mobilidade durante os treinos.",
    estoque: 30
  },
  {
    id: 5,
    nome: "Smartwatch Fit X200",
    preco: 699.00,
    categoria: "Eletrônicos",
    imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    descricao: "Smartwatch com monitor cardíaco 24h, GPS integrado, resistência à água 5ATM, mais de 100 modos de treino e bateria com duração de 7 dias.",
    estoque: 3
  },
  {
    id: 6,
    nome: "Óculos de Sol Polarizado",
    preco: 159.90,
    categoria: "Acessórios",
    imagem: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
    descricao: "Óculos de sol com lentes polarizadas UV400, armação leve em TR90 flexível, proteção contra reflexo e estojo rígido de brinde. Estilo para qualquer ocasião.",
    estoque: 18
  },
  {
    id: 7,
    nome: "Garrafa Térmica 750ml",
    preco: 119.90,
    categoria: "Acessórios",
    imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    descricao: "Garrafa de aço inox com isolamento a vácuo de dupla parede. Mantém bebidas quentes por 12h e frias por 24h. Tampa com rosca hermética à prova de vazamentos.",
    estoque: 22
  },
  {
    id: 8,
    nome: "Short de Compressão",
    preco: 129.00,
    categoria: "Vestuário",
    imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    descricao: "Short de compressão com tecido elástico de 4 vias, bolso lateral com zíper e costura plana para evitar irritações. Perfeito para corrida e academia.",
    estoque: 0
  },
  {
    id: 9,
    nome: "Teclado Mecânico Compact",
    preco: 329.90,
    categoria: "Eletrônicos",
    imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80",
    descricao: "Teclado mecânico TKL sem fio com switches silenciosos, RGB por tecla, bateria de 4000mAh e conexão 2.4GHz + Bluetooth. Layout ABNT2.",
    estoque: 7
  },
  {
    id: 10,
    nome: "Tênis Casual Skate",
    preco: 249.90,
    categoria: "Calçados",
    imagem: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=400&q=80",
    descricao: "Tênis vulcanizado com palmilha em EVA anatômico, solado de borracha resistente à abrasão e cabedal em camurça sintética. Estilo street para o dia a dia.",
    estoque: 15
  }
];
const searchInput    = document.getElementById("search-input");
const categorySelect = document.getElementById("category-select");
const btnRender      = document.getElementById("btn-render");
const productList    = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
function createProductCard(produto) {
  
  const card = document.createElement("article");
  card.classList.add("product-card");
  card.dataset.id = produto.id;

  
  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;
  img.loading = "lazy";
  card.appendChild(img);

  
  const body = document.createElement("div");
  body.classList.add("card-body");

  const category = document.createElement("span");
  category.classList.add("card-category");
  category.textContent = produto.categoria;

  const name = document.createElement("h2");
  name.classList.add("card-name");
  name.textContent = produto.nome;

  const price = document.createElement("p");
  price.classList.add("card-price");
  price.textContent = formatPrice(produto.preco);

  const stock = document.createElement("p");
  stock.classList.add("card-stock");
  if (produto.estoque === 0) {
    stock.textContent = "Fora de estoque";
    stock.classList.add("low");
  } else if (produto.estoque <= 5) {
    stock.textContent = `Restam apenas ${produto.estoque} unidades`;
    stock.classList.add("low");
  } else {
    stock.textContent = `${produto.estoque} unidades em estoque`;
    stock.classList.add("ok");
  }

  body.appendChild(category);
  body.appendChild(name);
  body.appendChild(price);
  body.appendChild(stock);
  card.appendChild(body);

  const actions = document.createElement("div");
  actions.classList.add("card-actions");

  const btnDetails = document.createElement("button");
  btnDetails.classList.add("btn-card", "btn-details");
  btnDetails.textContent = "Ver detalhes";
  btnDetails.type = "button";
  btnDetails.addEventListener("click", (e) => {
    e.stopPropagation();
    showProductDetails(produto);
  });

  const btnHighlight = document.createElement("button");
  btnHighlight.classList.add("btn-card");
  btnHighlight.textContent = "Destacar";
  btnHighlight.type = "button";
  btnHighlight.addEventListener("click", (e) => {
    e.stopPropagation();
    card.classList.toggle("highlight");
    btnHighlight.textContent = card.classList.contains("highlight")
      ? "Remover destaque"
      : "Destacar";
  });

  actions.appendChild(btnDetails);
  actions.appendChild(btnHighlight);
  card.appendChild(actions);

  return card;
}
function renderProducts(produtos) {
  
  productList.innerHTML = "";

  if (produtos.length === 0) {
    const empty = document.createElement("p");
    empty.classList.add("empty-state");
    empty.textContent = "Nenhum produto encontrado. Tente outro filtro.";
    productList.appendChild(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  produtos.forEach((produto) => {
    const card = createProductCard(produto);
    fragment.appendChild(card);
  });
  productList.appendChild(fragment);

  const allCards = productList.querySelectorAll(".product-card");
  console.log(`[NexStore] ${allCards.length} card(s) renderizado(s):`);
  allCards.forEach((card) => {
    console.log(`  → Produto ID: ${card.dataset.id}`);
  });
}
function renderCategories() {
  const categories = [...new Set(PRODUCTS.map((p) => p.categoria))].sort();

  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}
function showProductDetails(produto) {
  
  productDetails.innerHTML = "";

  const img = document.createElement("img");
  img.src = produto.imagem;
  img.alt = produto.nome;
  img.classList.add("details-img");

  
  const info = document.createElement("div");
  info.classList.add("details-info");

  const category = document.createElement("span");
  category.classList.add("details-category");
  category.textContent = produto.categoria;

  const name = document.createElement("h2");
  name.classList.add("details-name");
  name.textContent = produto.nome;

  const price = document.createElement("p");
  price.classList.add("details-price");
  price.textContent = formatPrice(produto.preco);

  const desc = document.createElement("p");
  desc.classList.add("details-desc");
  desc.textContent = produto.descricao;

  const meta = document.createElement("p");
  meta.classList.add("details-meta");
  const stockText = produto.estoque === 0
    ? "Fora de estoque"
    : `${produto.estoque} unidades disponíveis`;
  meta.innerHTML = `ID: <span>#${produto.id}</span> &nbsp;|&nbsp; Estoque: <span>${stockText}</span>`;

  const btnClose = document.createElement("button");
  btnClose.classList.add("btn-close-details");
  btnClose.textContent = "Fechar detalhes";
  btnClose.type = "button";
  btnClose.addEventListener("click", () => {
    productDetails.hidden = true;
  });

  info.appendChild(category);
  info.appendChild(name);
  info.appendChild(price);
  info.appendChild(desc);
  info.appendChild(meta);
  info.appendChild(btnClose);

  productDetails.appendChild(img);
  productDetails.appendChild(info);

  
  productDetails.hidden = false;
  productDetails.scrollIntoView({ behavior: "smooth", block: "start" });
}
function filterProducts() {
  const query    = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filtered = PRODUCTS.filter((produto) => {
    const matchesText =
      produto.nome.toLowerCase().includes(query) ||
      produto.descricao.toLowerCase().includes(query);

    const matchesCategory = category === "" || produto.categoria === category;

    return matchesText && matchesCategory;
  });

  renderProducts(filtered);
}
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
btnRender.addEventListener("click", () => {
  filterProducts();
  productList.scrollIntoView({ behavior: "smooth", block: "start" });
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") filterProducts();
});
renderCategories();
renderProducts(PRODUCTS);
