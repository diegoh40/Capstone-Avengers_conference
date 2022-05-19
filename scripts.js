// Mobil-menu//
function menuClose(opc) {
    if (opc) {
        const mmenu = document.querySelector('#mobile_menu');
        mmenu.style.display = 'none';
    }
}

function menuOpen(opc = false) {
    if (opc) {
        const mmenu = document.querySelector('#mobile_menu');
        mmenu.style.display = 'block';
    }
}



menuOpen();// menu header
menuClose();// menu header

// Speakers

const heros = [
    {
        image: './images/widow.png',
        name: 'Natasha Romanoff',
        whois: 'Master in the covert arts of espionage, infiltration & subterfuge',
        description: 'Natasha Romanoff is the super-spy known as  the Black Widow! Trained extensively in the art of espionage and outfitted with  state - of - the - art equipment',
    },

    {
        image: './images/bruce.png',
        name: 'Bruce Banner',
        whois: 'As Banner, possesses a genius-level intellect & is  an expert in multiple scientific fields, particularly the studies of physics & radiation.',
        description: 'A massive dose of gamma radiation transformed the brilliant but meek scientist Bruce Banner DNA, awakening the hidden, adrenaline- fed hero in his genes...HULK!',
    },

   
];

const herosContainer = document.querySelector('.heros-container');
const allHeros = document.createElement('div');
allHeros.classList.add('allHeros');
herosContainer.append(allHeros);

for (let i = 0; i < heros.length; i += 1) {
    const hero = document.createElement('div');
    hero.classList.add('hero');
    allHeros.append(hero);

    hero.innerHTML = `
    <img class="heros-img" src="${heros[i].image}">
    <div class="heros-object">
      <p class="names">${heros[i].name}</p>
      <p class="orange-text">${heros[i].whois}</p>
      <p class="heros-arguments">${heros[i].description}</p>
      </div>
        `;
}
