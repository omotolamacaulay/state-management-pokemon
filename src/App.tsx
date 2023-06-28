import { PokemonProvider, usePokemon } from "./store"
import './App.css'

function SearchBox () {
  const { search, setSearch } = usePokemon()
  return (
    <input type="text" placeholder="Search" className="searchBox" value={search} onChange={(e) => setSearch(e.target.value) } />
  )
}

const PokemonList = () => {
  const {pokemon} = usePokemon()
  return (
    <ul className="pokemonGrid">
      {pokemon.map((p) => (
        <li
        key={p.id}
        className="liClass"
      >
        <div className="flex-1 flex flex-col p-8">
          <img
            className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
            alt=""
          />
          <h3 className="mt-6 text-gray-900 text-sm font-medium">{p.name}</h3>
        </div>
      </li>
      ))}
    </ul>
  )
}
function App() {
  // const { pokemon } = usePokemon()
  return (
    <div>
      <PokemonProvider>
        <div className="body">
          <SearchBox />
          <PokemonList />
        </div>
      </PokemonProvider>
    </div>
  )
}

export default App
