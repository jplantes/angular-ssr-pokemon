
const TOTAL_POKEMONS = 150;
const TOTAL_PAGES = 5;

(async() => {

  const fs = require('fs');

  const pokemonsIds = Array.from({ length: TOTAL_POKEMONS }, (_, i) => i + 1);
  const pokemonsPages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
  
  // Pokemons por ID
  let fileContent = pokemonsIds.map( id => `/pokemon/${id}` ).join('\n');
  
  // Páginas
  pokemonsPages.forEach( page => fileContent += `\n/pokemons/page/${page}` );

  // Pokemons por nombre
  const pokemonsListName = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`).then( resp => resp.json() )
  fileContent += '\n';
  fileContent += pokemonsListName.results.map( pokemon => `/pokemon/${pokemon.name}`).join('\n');

  fs.writeFileSync('router.txt', fileContent);
  
  console.log('router.txt generado.');
})()