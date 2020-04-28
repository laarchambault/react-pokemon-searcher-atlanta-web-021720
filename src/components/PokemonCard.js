import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    clicked: false
  }

  imgFlip = () => {
    this.setState(prev => ({clicked: !prev.clicked}))
  }

  render() {
    let {id, name} = this.props.pokemon
    let stat = this.props.pokemon.stats.find(stat => stat.name === 'hp')
    let hp = stat.value
    let frontUrl = this.props.pokemon.sprites.front
    let backUrl = this.props.pokemon.sprites.back
    return (
      <Card>
        <div>
          <div onClick={this.imgFlip} className="image">
            <img src={this.state.clicked ? backUrl : frontUrl} alt={name + " " + (this.state.clicked ? "back" : "front")} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
