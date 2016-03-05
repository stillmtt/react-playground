var React = require('react');
var ReactDOM = require('react-dom');

class AddItem extends React.Component {

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){

    if(e.keyCode === 13){
      var newItem = ReactDOM.findDOMNode(this.refs.newItem).value;
      this.props.add(newItem);
      this.formReset();
    }

  }

  formReset(){
    ReactDOM.findDOMNode(this.refs.newItem).value = '';
  }


  render(){
    return (
      <div>
        <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit}  />
      </div>
    )
  }
};

module.exports = AddItem;