import React from 'react'

class DirectorInput extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      director: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event){
    this.setState({director: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    const director = this.state.director.trim()
    if (!director) { return }
    this.props.onSearch({director: director})
    this.setState({director: ''})
  }

  render(){
    return (
     <form className='input-form' onSubmit={this.handleSubmit}>
       <input type="text" placeholder="Director name" value={this.state.director} onChange={this.handleInputChange.bind(this)}/>
       <input type="submit" value="Search"/>
     </form>
    )
  }
}

export default DirectorInput