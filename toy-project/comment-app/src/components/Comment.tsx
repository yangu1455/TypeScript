// Comment.tsx
import { useState, useEffect } from 'react';
import { commentType } from "../types";
import './comment.css'

const dateNow = new Date();
const today = dateNow.toISOString().slice(0, 10);

const Comment = (): JSX.Element => {
  // text를 받아오는 고런..
  const [newText, setNewText] = useState('');
  const [comments, setComments] = useState<commentType[]>([]);
  // 수정 기능을 위해 대상 댓글의 ID 받아오는..
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);


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
    if (newText.length === 0) {
      // 댓글 내용이 비어있으면 등록하지 않음
      return;
    }

    // text 제외한 모든 고정된 값을 가진 댓글을 생성
    const newComment = {
      id: comments.length + 1,
      name: 'yangu1455',
      text: newText,
      timestamp: new Date(),
      pf_pic: "./images/킹감자.jpeg",
    };

    // 새로운 댓글을 기존 댓글 목록에 추가
    setComments([...comments, newComment]);
    console.log(newComment);
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



  const editCommentSubmit = (id: number, text: string) => {
    setEditingCommentId(id);
    setNewText(text);
  };

  const handleConfirmEdit = () => {
    if (newText.length === 0 || editingCommentId === null) {
      // 댓글 내용이 비어있거나 수정 대상 댓글이 없으면 수정하지 않음
      return;
    }
  
    const updatedComments = comments.map((comment) => {
      if (comment.id === editingCommentId) {
        return {
          ...comment,
          // 새로 받을 text
          text: newText,
          // 수정된 시간
          timestamp: new Date(),
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setNewText('');
    setEditingCommentId(null);
  };

  const deleteCommentSubmit = (id: number) => {
    try {
      const updatedComments = comments.filter((comment) => comment.id !== id);
      setComments(updatedComments);
    } catch (error) {
      console.error('에러 발생 : ', error);
    }    
  };

  // 와 이거 '~분 전'으로 표시되는 함수 블로그에서 가지고 옴 감사합니다...
  const elapsedTime = (date: Date): string => {
    const start = new Date(date);
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return '방금 전';

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${start.toLocaleDateString()}`;
  };

  return (
    <div className='comment'>
      <h1>{today}</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className='comment-profile-timestamp-box'>
              <div className='comment-profile-box'>
                <img className='comm_pf_pic' src={comment.pf_pic} alt="프로필 사진" />
                <p>{comment.name}</p>
              </div>
              <div>
                <p>{elapsedTime(comment.timestamp)}</p>
              </div>
            </div>
            <div className='comment-content'>
              <p>{comment.text}</p>
              <div>
                {editingCommentId === comment.id ? (
                  // 수정 모드 일때
                  <button onClick={() => setEditingCommentId(null)}>취소</button>
                ) : ( 
                  // 수정 모드 아닐 때
                  <button onClick={() => editCommentSubmit(comment.id, comment.text)}>수정</button>
                )}
                <button onClick={() => deleteCommentSubmit(comment.id)}>삭제</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='comment-input-box'>
        <input
          className='comment-input'
          type='text'
          placeholder="댓글을 입력하세요"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        {/* 수정 모드일 경우에는 확인 & 수정 기능 / 수정 모드 아닐 경우에는 댓글 생성 & 댓글 생성 기능 */}
        <button onClick={editingCommentId !== null ? handleConfirmEdit : handleCommentSubmit}>
          {editingCommentId !== null ? '확인' : '댓글 생성'}
        </button>
      </div>
    </div>
  );
};

export default Comment;
