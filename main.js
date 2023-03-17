// data teams
const dataUser = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'Riki Widiantoro',
    position: 'Founder & CEO'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'Paul Atreides',
    position: 'CTO'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'Letto Atreides',
    position: 'CFO'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'Alia Atreides',
    position: 'Staf'
  }
];

// container div card team
const teams = document.getElementById("data-teams");

for( let i = 0; i < dataUser.length; i++ ) {
  let card = document.createElement('div');
  let img = document.createElement('img');
  let h5 = document.createElement('h5');
  let p = document.createElement('p');

  card.classList.add('card');
  img.classList.add('card-image');
  h5.classList.add('card-name');
  p.classList.add('card-position');

  img.src = dataUser[i].imageUrl;
  h5.innerText = dataUser[i].name;
  p.innerText = dataUser[i].position;

  // card.appendChild(img);
  // card.appendChild(h5);
  // card.appendChild(p);

  card.append(img, h5, p);

  teams.appendChild(card);
}

// data customer
const dataCustomer = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Customer 1',
    ul: '<li>Trade</li><li>blablabla</li><li>blablabla</li><li>blablabla</li><li>blablabla</li>'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Customer 2',
    ul: '<li>Trade</li><li>blablabla</li><li>blablabla</li><li>blablabla</li><li>blablabla</li>'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Customer 3',
    ul: '<li>Trade</li><li>blablabla</li><li>blablabla</li><li>blablabla</li><li>blablabla</li>'
  },
];

// container div card customer
const workCards = document.getElementById('work-cards');

for( let j = 0; j < dataCustomer.length; j++ ) {
  let card = document.createElement('div');
  let img = document.createElement('img');
  let h5 = document.createElement('h5');
  let ul = document.createElement('ul');

  card.classList.add('work-card');

  img.src = dataCustomer[j].imageUrl;
  h5.innerText = dataCustomer[j].title;
  ul.innerHTML = dataCustomer[j].ul;

  card.append(img, h5, ul);

  workCards.appendChild(card);


  // const card = `
  // <div class="work-card">
  //   <img src="${dataCustomer[j].imageUrl}" alt="work-img">
  //   <h5>${dataCustomer[j].title}</h5>
  //   <ul>${dataCustomer[j].ul}</ul>
  // </div>
  // `;

  // workCards.appendChild(card);
}

// data pricing
const dataPricing = [
  {
    title: 'Basic',
    storage: '10GB',
    email: 10,
    domain: 10,
    support: 'Endless',
    price: '$ 10'
  },
  {
    title: 'Pro',
    storage: '25GB',
    email: 25,
    domain: 25,
    support: 'Endless',
    price: '$ 25'
  },
  {
    title: 'Premium',
    storage: '50GB',
    email: 50,
    domain: 50,
    support: 'Endless',
    price: '$ 50'
  }
];

// container div card pricing
const pricingCards = document.getElementById('pricing-cards');

for( let k = 0; k < dataPricing.length; k++ ) {
  let card = document.createElement('div');
  let divHeader = document.createElement('div');
  let divButton = document.createElement('div');

  let ul = document.createElement('ul');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');
  let button = document.createElement('button');
  let liStorage = document.createElement('li');
  let liEmail = document.createElement('li');
  let liDomain = document.createElement('li');
  let liSupport = document.createElement('li');

  card.classList.add('pricing-card');
  divHeader.classList.add('div-header');
  divButton.classList.add('div-button');

  if( k % 2 == 1 ) {
    divHeader.classList.add('div-header-bedawarna');
  }

  h3.innerText = dataPricing[k].title;
  liStorage.innerHTML = `<b>${dataPricing[k].storage}</b> Storage`;
  liEmail.innerHTML = `<b>${dataPricing[k].email}</b> Emails`;
  liDomain.innerHTML = `<b>${dataPricing[k].domain}</b> Domains`;
  liSupport.innerHTML = `<b>${dataPricing[k].support}</b> Support`;
  p.innerHTML= `${dataPricing[k].price} <br><span>per mounth</span>`;
  button.innerText = 'Sign Up';

  divHeader.appendChild(h3);
  ul.append(liStorage, liEmail, liDomain, liSupport);
  divButton.appendChild(button);

  card.append(divHeader, ul, p, divButton);
  pricingCards.appendChild(card);
}
