const video = document.querySelector("video");
const pauseIcon = document.querySelector("#pause-icon");
let isPaused = false;

function pauseFunction() {
  if (isPaused) {
    video.play();
    if (pauseIcon) {
      pauseIcon.classList.remove("fa-play");
      pauseIcon.classList.add("fa-pause");
    }
  } else {
    video.pause();
    if (pauseIcon) {
      pauseIcon.classList.remove("fa-pause");
      pauseIcon.classList.add("fa-play");
    }
  }
  isPaused = !isPaused;
}

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
let isTranslated = true;

function translateFunction() {
  if (isTranslated) {
    p1.innerText = "Ce système de gestion de liste d'achats CRUD pour les entreprises a été développé en seulement 4 heures, démontrant l'application rapide de compétences récemment acquises. En 20 jours, j'ai appris Java, Spring Boot et SQL depuis zéro, et ce projet en est une démonstration pratique.";
    p2.innerText = "Malgré le court délai de développement, le projet reflète une compréhension claire du développement backend, de l'intégration de bases de données et des bases du frontend. Il met en évidence la capacité à transformer rapidement des connaissances fraîches en une application fonctionnelle.";
    p3.innerText = "Poussé par une passion pour l'apprentissage et la maîtrise de nouvelles compétences en informatique de gestion, je me concentre sur la création de solutions full-stack fiables combinant logique backend efficace et interfaces conviviales.";
  } else {
    p1.innerText = "This CRUD buy-list management system for companies was developed in just 4 hours, showcasing rapid application of newly acquired skills. Over the course of 20 days, I learned Java, Spring Boot, and SQL from scratch, and this project is a practical demonstration of that fast-track learning.";
    p2.innerText = "Despite the short build time, the project reflects a clear understanding of backend development, database integration, and frontend basics. It highlights the ability to quickly transform fresh knowledge into a working, functional application.";
    p3.innerText = "Driven by a passion for learning and mastering new skills in business informatics, I focus on building reliable full-stack solutions that combine efficient backend logic with user-friendly interfaces.";
  }
  isTranslated = !isTranslated;
}
const baseURL = "http://localhost:8080/products";
const productTable = document.getElementById("productTable");

function fetchProducts() {
  if (!productTable) return;

  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      productTable.innerHTML = "";
      data.forEach(p => {
        productTable.innerHTML += `
          <tr>
            <td>${p.prodId}</td>
            <td>${p.prodName}</td>
            <td>${p.prodQuantity}</td>
            <td>${p.prodPrice}</td>
          </tr>
        `;
      });
    });
}

function getInputs() {
  return {
    prodId: parseInt(document.getElementById("prodId").value),
    prodName: document.getElementById("prodName").value,
    prodQuantity: parseInt(document.getElementById("prodQuantity").value),
    prodPrice: parseFloat(document.getElementById("prodPrice").value),
  };
}

function addProduct() {
  const prod = getInputs();
  fetch(baseURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod)
  }).then(fetchProducts);
}

function updateProduct() {
  const prod = getInputs();
  fetch(baseURL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prod)
  }).then(fetchProducts);
}

function deleteProduct() {
  const id = document.getElementById("prodId").value;
  fetch(`${baseURL}/${id}`, {
    method: "DELETE"
  }).then(fetchProducts);
}

if (productTable) {
  fetchProducts();
}
window.pauseFunction = pauseFunction;
window.translateFunction = translateFunction;
window.addProduct = addProduct;
window.updateProduct = updateProduct;
window.deleteProduct = deleteProduct;
