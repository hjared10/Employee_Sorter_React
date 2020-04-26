import React, { Component } from "react";
import API from '../utils/API';


class Table extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.findusers();
  }

  finderusers = () => {
    API.getUsers()
    .then(res => {
      const persons = res.data;
      this.setState({persons})})
  }


render() {
  return (
    <ul>
      {this.state.persons.map(person => <li>{person.name}</li>)}
    </ul>
  )
}
}

export default Table;

//"https:////randomuser.me/api/?results=200&nat=us