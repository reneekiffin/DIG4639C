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
    //alert('A name was submitted: ' + this.state.value);
    //event.preventDefault();

    if (/[a-zA-Z]+/.text(this.state.value)) {
      this.setState({nameAvailable:true});
    }
    else{
      alert('This input is not a name');
      this.setState({isValid:true})
    };

  event.preventDefaultfault();

  }

  render() {
    //let returnArray =[]//missing code

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
  } else {
    return (<div>Good Morning{this.state.value}</div>);
  }

    if (!this.state.isValid){
      return (<p>Must be a valid a-Z or A-Z</p>);}


  }
}

 export default NameForm;//name of class you want to export
