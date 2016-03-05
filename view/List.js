var React = require('react');
var ReactDOM = require('react-dom');

class List extends React.Component {


  render(){


    var listitems = this.props.items.map(function(name, indx){
      return (
        <li key={indx} onClick={this.props.remove.bind(null, indx)}>{name}</li>
      )
    }.bind(this));

    return <ul>{listitems}</ul>
  }
};

module.exports = List;