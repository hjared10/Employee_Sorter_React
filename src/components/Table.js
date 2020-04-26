import React, { Component } from "react";
import axios from 'axios';




class Table extends Component {
  state = {
    persons: [],
    persononen: '',
    persononea: '',
    persononel: '',
    persontwon:'',
    persontwoa: '',
    persontwol: '',
    personthreen: '',
    personthreea: '',
    personthreel: ''
  }

  componentDidMount() {
    axios.get("https:////randomuser.me/api/?results=10&nat=us")
    .then(res => {
      console.log(res.data.results)
      const persons = res.data.results;
      //console.log(persons[1])
      this.setState({persons})
      this.setState({persononen:persons[1].name.first})
      this.setState({persononel:persons[1].name.last})
      this.setState({persononea:persons[1].dob.age})
      this.setState({persontwoa:persons[2].dob.age})
      this.setState({persontwon:persons[2].name.first})
      this.setState({persontwol:persons[2].name.last})
      this.setState({personthreea:persons[3].dob.age})
      this.setState({personthreen:persons[3].name.first})
      this.setState({personthreel:persons[3].name.last})
    })
  }

render() {
  return (
    <div>

    <table style={{width:'100%'}}>
  <tr>
    <th>{this.state.persononen}</th>
  <th>{this.state.persononel}</th>
    <th>{this.state.persononea}</th>
  </tr>
  <tr>
  <td>{this.state.persontwon}</td>
  <td>{this.state.persontwol}</td>
  <td>{this.state.persontwoa}</td>
  </tr>
  <tr>
    <td>{this.state.personthreen}</td>
    <td>{this.state.personthreel}</td>
  <td>{this.state.personthreea}</td>
  </tr>
</table>
    </div>
  )
}
}

export default Table;