import { useState } from 'react'

// props 타입 정의
interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  // 여기서 e의 타입은 이미 정의된 것이 있기 때문에 그대로 가지고 오면 됨
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input 
        value={text}
        onChange={onChangeInput}  
      />
      <button onClick={onClickButton}>추가</button>
    </div>
  )
}

