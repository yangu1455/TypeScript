import { useState } from "react";
import { comments } from "../data";
// import axios from 'axios';

const CommentList = () => {
  const [comments, setComments] = useState<string[]>([]);

  // useEffect(() => {
  //   getComments();
  // }, []);

  // const getComments = async () => {
  //   try {
  //     const response = await axios.get('/api/comments'); // 백엔드 API 경로
  //     setComments(response.data);
  //   } catch (error) {
  //     console.error('Error fetching comments:', error);
  //   }
  // };

  return (
    <div>
      <h2>댓글 목록</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <img className='comm_pf_pic' src={comment.pf_pic} alt="프로필 사진" />
            {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
