import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { getAllTodos } from '../api/todos'
import { bindActionCreators } from 'redux'

export class Home extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      checked: [0],
    }
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  componentDidMount(){
    this.props.getAllTodos()
  }
  
  render(){
    const { todos } = this.props
    return (
      <List className='homepage'>
        {todos.map(value => (
          <ListItem key={value.id} role={undefined} dense button onClick={this.handleToggle(value)}>
            <Checkbox
              checked={this.state.checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={value.task} />
           
          </ListItem>
        ))}
      </List>

    )
  }
  
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getAllTodos}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)