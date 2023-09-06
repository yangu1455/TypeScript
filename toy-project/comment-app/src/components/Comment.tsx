// Comment.tsx
import { useState, useEffect } from 'react';
import { commentType } from "../types";

const dateNow = new Date();
const today = dateNow.toISOString().slice(0, 10);

const Comment = (): JSX.Element => {
  const [newText, setNewText] = useState('');
  const [comments, setComments] = useState<commentType[]>([]);

  useEffect(() => {
    // JSON 파일을 비동기적으로 로드
    fetch('/src/comments.json')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error('댓글 데이터를 로드하는 중 오류 발생:', error));
  }, []);

  const handleCommentSubmit = () => {
    // text 제외한 모든 고정된 값을 가진 댓글을 생성
    const newComment = {
      id: comments.length + 1,
      name: 'yangu1455',
      text: newText,
      timestamp: new Date().toLocaleString(),
      pf_pic: "./images/킹감자.jpeg",
    };

    // 새로운 댓글을 기존 댓글 목록에 추가
    setComments([...comments, newComment]);
    setNewText('');

    // // JSON 파일을 불러와서 기존 데이터에 새로운 댓글을 추가합니다.
    // fetch('/src/comments.json') // Vite는 정적 리소스를 `/src` 경로에서 제공합니다.
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const newComments = [...data, newComment];
    //     console.log(newComments)
    //     return newComments;
    //   })
    //   .then((newComments) => {
    //     // JSON 파일로 업데이트합니다.
    //     return fetch('/src/comments.json', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newComments),
    //     });
    //   })
    //   .then(() => {
    //     console.log('새로운 댓글이 성공적으로 추가되었습니다.');
    //     setNewText('');
    //   })
    //   .catch((error) => console.error('댓글을 추가하는 중 오류 발생:', error));

  };

  return (
    <div>
      <h1>{today}</h1>
      <textarea
        placeholder="댓글을 입력하세요"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleCommentSubmit}>댓글 생성</button>
      
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <img className='comm_pf_pic' src={comment.pf_pic} alt="프로필 사진" />
              {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
