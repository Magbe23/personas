import React from 'react';
import './App.css';

class PersonCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      age: this.props.age
    };
  }

  handleBirthday = () => {
    this.setState(prevState => ({
      age: prevState.age + 1
    }));
  }
  
  render(){
    const { firstname, lastname, haircolor} = this.props;
    const {age} = this.state;
    return(
      <div>
        <h2>{firstname}, {lastname}</h2>
        <p>Age: {age}</p>
        <p>Hair Color: {haircolor}</p>
        <button onClick={this.handleBirthday}>
          Birthday Button For {firstname} {lastname}
        </button>
      </div>
    );
  }
}

function App(){
  return(
    <div>
      <PersonCard firstname= "Jane" lastname="Doe" age={45} haircolor="Black"/>
      <PersonCard firstname= "John" lastname="Smith" age={88} haircolor="Brown"/>
      <PersonCard firstname= "Millare" lastname="Fillmore" age={50} haircolor="Brown"/>
      <PersonCard firstname= "Maria" lastname="Smith" age={62} haircolor="Blonde"/>
    </div>
  );
}
export default App;
