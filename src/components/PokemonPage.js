import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount () {
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    .then(pokemon => this.setState({pokemon: pokemon}))
  }

  searchOnChange = event => {
    this.setState({searchTerm: event.target.value})
  }

  showPokemon = () => {
    let pokemon = [...this.state.pokemon]
    if (this.state.searchTerm.length > 0) {
      return pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    }
    return pokemon
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search 
          onChange={this.searchOnChange} 
          term={this.state.searchTerm} />
        <br />
        <PokemonCollection pokemon={this.showPokemon()} />
      </Container>
    )
  }
}

export default PokemonPage
