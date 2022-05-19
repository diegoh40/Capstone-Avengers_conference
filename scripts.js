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

    {
        image: './img/speakers/mob-markmanson.png',
        name: 'Mark Manson',
        title: 'Author of the New York Times bestselling book The Subtle Art of Not Giving a F*ck.',
        description: 'As of 2019, he had authored three books, two of which were The New York Times bestsellers. His books have sold over 13 million copies.',
    },

    {
        image: './img/speakers/mob-matthewwalker.png',
        name: 'Matthew Walker',
        title: 'Scientist and professor of neuroscience and psychology at the University of California, Berkeley',
        description: 'He became a public intellectual following the publication of "Why We Sleep", his first work of popular science, in 2017. It became an international bestseller.',
    },

    {
        image: './img/speakers/mob-niccomele.png',
        name: 'Nicco Mele',
        title: 'Academic, writer, and businessman. Author of "The End of Big"',
        description: 'He is widely published on matters exploring the intersection of internet policy, new media, journalism, and politics.',
    },

    {
        image: './img/speakers/mob-olarosling.png',
        name: 'Ola Rosling',
        title: 'Statistician known for his work for the Gapminder Foundation',
        description: 'He co-authored the book "Factfulness" where suggests that the vast majority of people are wrong about the state of the world.',
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
