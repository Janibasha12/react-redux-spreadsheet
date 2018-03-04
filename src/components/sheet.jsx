import React,{Component} from 'react';
import {connect} from 'react-redux';
import {buttonClicked, buttonName} from '../actions/table'
class Styler extends Component{

  handleClick = (e) =>{
    e.preventDefault();
    this.props.handleButton(e.target.name);
  }

  handleDelete = (e) =>{
    e.preventDefault();
    this.props.handleDelete(e.target.name);
  }

  handleClear = (e) => {
    this.props.handleClear();
  }

  addRowColumn = (e) =>{
    this.props.addRowColumn(e.target.name);
  }

  handleSearch = (e) =>{
    this.props.handleSearch(e.target.value)
  }
  render(){
    return(
      <div className="styler">
      <button type="submit" className="btn-success" name="row" onClick={this.addRowColumn} title="Add Row">Add Row</button>
      <button type="submit" className="btn-primary" name="column" onClick={this.addRowColumn} title="Add Column">Add Column</button>
      <button type="submit" className="btn-info" name="delete-row" onClick={this.handleClick} title="Delete Row">Delete Row</button>
      <button type="submit" className="btn-danger" name="delete-row" onClick={this.handleClick} title="Delete Column">Delete Column</button>
      <button type="submit" className="btn btn-default" name="clear-sheet" onClick={this.handleClear} title="Clear All">Clear</button>

        <br/>
        <input type="text" placeholder="Type to search" onChange={this.handleSearch}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    buttonClicked : state.buttonClicked,
    buttonName : state.buttonName
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    clickButton : (bool)=>dispatch(buttonClicked(bool)),
    buttonName : (value)=>dispatch(buttonName(value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Styler)