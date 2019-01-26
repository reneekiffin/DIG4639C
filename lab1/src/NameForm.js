import React, {Component} from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}//, nameAvailable()};//missing code

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.name = event.target.value;
  }

  handleSubmit(event) {
    alert('Name submitted: ' + this.state.value);
    event.preventDefault();

    if (this.state.value.match (/[a-zA-Z]+/)) {
      this.setState({nameAvailable:true});
    }
    else{
      alert('This input is not a name');
      this.setState({isValid:true})
    };




  event.preventDefault();

  }

  render() {

    if(!this.state.nameAvailable){

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

      </form>
    );
  }
  else {
    return (<div>Good Morning {this.state.value}</div>);
  }


  }
}

 export default NameForm;//name of class you want to export
