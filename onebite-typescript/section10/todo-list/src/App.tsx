import { useState, useRef, useEffect } from 'react'
import './App.css'

// todolist에 담길 todo 객체
interface Todo {
  id: number;
  content: string;
}

function App() {
  // todolist의 타입은 Todo의 배열 타입
  const [todolist, setTodolist] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  // 여기서 e의 타입은 이미 정의된 것이 있기 때문에 그대로 가지고 오면 됨
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const idRef = useRef(0);

  // 추가 버튼을 누를 때 실행 시킬 것
  const onClickAdd = () => {
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
      <input 
        value={text}
        onChange={onChangeInput}  
      />
      <button onClick={onClickAdd}>추가</button>
    </>
  )
}

export default App
