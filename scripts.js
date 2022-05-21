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
    image: './images/roger.png',
    name: 'Steve Rogers',
    whois: 'Peak physical condition, with heightened strength, endurance & agility',
    description: 'During WWII, the patriotic Steve Rogers was  offered a place in the military top operation: Rebirth. Injected with an experimental super-serum.',
  },

  {
    image: './images/tony.png',
    name: 'Tony Stark',
    whois: 'Billionaire industrialist Tony Stark dons his sophisticated steel- mesh armor',
    description: 'Tony has primed his ultra modern creation for waging state of the art campaigns, attaining sonic flight, and defending the greater good!',
  },

  {
    image: './images/clint.png',
    name: 'Clinton Barton',
    whois: 'Extremely skilled marksman, a former special agent of S.H.I.E.L.D.and one of the founding members of the Avengers.',
    description: 'Known for his use of the bow and arrow as his primary weapon and an extremely keen eyesight and accuracy that earned him the codename Hawkeye, Barton had become one of the best agents of S.H.I.E.L.D.',
  },

  {
    image: './images/thor.png',
    name: 'Thor',
    whois: 'Superhuman strength, speed, endurance & resistance to injury',
    description: 'Nordic legend tells the tale of the son of Odin, the heir to the throne of Asgard - he is THOR, renowned as the mightiest hero of mythology!',
  },

];

const herosContainer = document.querySelector('.heros-container');
const myHeros = document.createElement('div');
myHeros.classList.add('myHeros');
herosContainer.append(myHeros);

for (let i = 0; i < heros.length; i += 1) {
  const hero = document.createElement('div');
  hero.classList.add('hero');
  myHeros.append(hero);

  hero.innerHTML = `
    <img class="heros-img" src="${heros[i].image}">
    <div class="heros-object">
      <p class="names">${heros[i].name}</p>
      <p class="orange-text">${heros[i].whois}</p>
      <p class="heros-arguments">${heros[i].description}</p>
      </div>
        `;
}
