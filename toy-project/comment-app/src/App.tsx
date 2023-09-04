import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

const App = () => {
  return (
    <body>
      <h1>댓글 기능 예제</h1>
      <CommentForm />
      <CommentList />
    </body>
  );
};

export default App;
