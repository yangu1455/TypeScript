import React, { useContext, useRef, useEffect, useReducer } from 'react'
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

// createContext는 한 개의 타입 변수를 사용하며, 하나의 매개 변수를 필수로 받고 있는 제네릭 함수
export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd : (text: string) => void;
  onClickDelete : (id: number) => void;
} | null>(null);

export function useTodoDispatch(){
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다");
  return dispatch;
}

function App() {
  // todolist의 타입은 Todo의 배열 타입
  const [todolist, dispatch] = useReducer(reducer, []);
  
  const idRef = useRef(1);

  // todo 추가
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

  // todo 삭제
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
      <TodoStateContext.Provider value={todolist}>
        <TodoDispatchContext.Provider
          value={{
            onClickAdd,
            onClickDelete,
          }}
        >
          <Editor/>
          <div>
            {todolist.map((todo)=>(
              <TodoItem key={todo.id} {...todo}/>
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  )
}

export default App
