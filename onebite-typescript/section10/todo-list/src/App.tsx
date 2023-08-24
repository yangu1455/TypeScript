import { useState, useRef, useEffect, useReducer } from 'react'
import './App.css'
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';

type Action = 
| {
  type: "CREATE",
  data: {
    id: number;
    content: string;
  }
} 
| { 
  type: "DELETE"; id: number 
};

function reducer(state: Todo[], action: Action) {
  switch(action.type){
    case 'CREATE': {
      return [...state, action.data];
    }
    case'DELETE': {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

function App() {
  // todolist의 타입은 Todo의 배열 타입
  const [todolist, dispatch] = useReducer(reducer, []);
  
  const idRef = useRef(1);

  // 추가 버튼을 누를 때 실행 시킬 것
  // setTodolist 호출때문에 옮기지 않는다.
  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        // idRef 현재 값에 ++를 해준당
        id: idRef.current++,
        content: text,
      }
    })
  }

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    })
  }

  useEffect(()=>{
    console.log(todolist);
  }, [todolist])

  return (
    <>
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd}/>
      <div>
        {todolist.map((todo)=>(
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete}/>
        ))}
      </div>
    </>
  )
}

export default App
