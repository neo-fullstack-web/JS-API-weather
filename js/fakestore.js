const fakeStoreURL = 'https://fakestoreapi.com/products'; //path
let products;

fetch(fakeStoreURL)
    .then(function(response) {
        return response.json()
    })
    .then(data => {
        console.log(data)
        products = data;
        pintarProducts();
})



function pintarProducts() {

    const container = document.getElementById('card-container');

    products.forEach(prod => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-4');
        card.innerHTML = `
        <img src="${prod.image}" class="card-img-top" alt="${prod.title} image">
        <div class="card-body">
          <h5 class="card-title">${prod.title}</h5>
          <p class="card-text">${prod.description}</p>
          <div>
            <small class="text-primary">${prod.category}</small>
          </div>
          <a href="/pages/product-detail/product-detail.html?id=${prod.id}&var2=Unvalor&price=dolar" class="btn btn-primary">Ver más</a>
        </div>
        `
        container.appendChild(card)
    })
}
