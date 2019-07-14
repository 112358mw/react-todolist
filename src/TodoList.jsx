import React, {Component} from 'react';
import { Input, Button, List} from 'antd';
import 'antd/dist/antd.css';
import store from './store';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange = (e) => {
    const action  = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleStoreChange  = ()  => {
    this.setState(store.getState);
  }

  handleBtnClick = () => {
    const action = {
      type: 'add_list_item',
      value: this.state.inputValue,
    }
    store.dispatch(action);
  }

  handleItemDelete = (index) => {
    const action = {
      type: 'delete_item',
      index,
    }
    store.dispatch(action);
    console.log(index);
  }

  render () {
    const { list,inputValue } = this.state;
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input placeholder="todo list " value={inputValue} style={{width: 300, marginRight: '30px'}} 
          onChange={this.handleInputChange}
        />
        <Button 
          type="primary"
          onClick={this.handleBtnClick}
          >提交</Button>
        <List
          style={{
            width: '300px',
            marginTop: '10px'
          }}
          bordered
          dataSource={list}
          renderItem={
            (item, index) => (
              <List.Item  onClick={() => this.handleItemDelete(index)}>
                {item}
              </List.Item>
            )
          }
        > 

        </List>
      </div>
    )
  }
}

export default TodoList;