import React from 'react';
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { bindActionCreators } from 'redux';

import {getTodosByPriority} from '../api/todos'

export class Menu extends React.Component {
constructor(props){
    super(props)
    this.state = {
      priority: '',
      open: false,
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value)
    this.props.getTodosByPriority(event.target.value)
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {

    return (
      <form autoComplete="off">
        <Button  onClick={this.handleOpen}>
          Priority
        </Button>
        <FormControl >
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.priority}
            onChange={this.handleChange}
            inputProps={{
              name: 'priority'
            }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getTodosByPriority }, dispatch)
}
export default connect(null, mapDispatchToProps)(Menu)