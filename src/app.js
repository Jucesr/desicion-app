class IndesicionApp extends React.Component {

  render(){
    const title = "Indecision App";
    const subtitle = "Put your life in hands of a computer";
    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2> {this.props.subtitle} </h2>
      </div>
    );
  }
}

class Action extends React.Component {

  render(){
    return (
      <div>
        <button>What should I do? </button>
      </div>
    );
  }
}

class Options extends React.Component {

  render(){
    return (
      <div>
        {`We have ${this.props.options.length} options`}
        {
          this.props.options.map( (opt) =>{
            return <Option key={opt} text={opt} />
          } )
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    const textOption = this.props.text;
    return (
      <div>
        {textOption}
      </div>
    );
  }
}

class AddOption extends React.Component {

  render(){
    return (
      <div>
        <p> AddOption Component here </p>
      </div>
    );
  }
}

ReactDOM.render(<IndesicionApp />, document.getElementById('app'));
