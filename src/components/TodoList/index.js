import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';

import { useState } from 'react'

import { useDispatch , useSelector } from 'react-redux';

import { addTodo } from '../../redux/actions';
import {todoListSelector , searchTextSelector , todoRemainingSelector } from '../../redux/selector'

import {v4 as uuidv4 } from 'uuid'


export default function TodoList() {
  
  const [todoName, settodoName ] = useState()
  const [ priority , setPriority] = useState()
  
  
  const todoList = useSelector(todoRemainingSelector) //get one of global states in redux
  const dispatch = useDispatch();
  console.log({todoList})
  //search
  // const searchText = useSelector(searchTextSelector)

  
  // handle with dispatch
  const handleAddButtonClick = ()=>{
    dispatch(addTodo({
      id : uuidv4(),
      name : todoName, 
      priority : priority,
      completed : false
    }))

    settodoName('')
    setPriority('Medium')
  }

// set state for Name & priority
  const handleInputChange = (e) =>{
    settodoName(e.target.value)

  }
  const handlePriorityChange =(value)=>{
    setPriority(value)
    
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} /> )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option  value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
