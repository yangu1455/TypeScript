import { useState, useRef, useEffect } from 'react'
import './App.css'
import Editor from './components/Editor';

// todolist에 담길 todo 객체
interface Todo {
  id: number;
  content: string;
}

function App() {
  // todolist의 타입은 Todo의 배열 타입
  const [todolist, setTodolist] = useState<Todo[]>([]);
  
  const idRef = useRef(0);

  // 추가 버튼을 누를 때 실행 시킬 것
  // setTodolist 호출때문에 옮기지 않는다.
  const onClickAdd = (text: string) => {
    setTodolist([
      ...todolist,
      {
        // idRef 현재 값에 ++를 해준당
        id: idRef.current++,
        content: text,
      }
    ])
  }

  useEffect(()=>{
    console.log(todolist);
  }, [todolist])

  return (
    <>
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd}/>
    </>
  )
}

export default App
