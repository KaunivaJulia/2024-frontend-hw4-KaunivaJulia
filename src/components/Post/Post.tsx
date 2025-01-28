import { useParams } from 'react-router-dom';
import { posts } from '../../constants/posts';

export const Post = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(post => post.id === Number(id));

  if (!post) {
    return <div>Пост не найден</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <img src={post.image} alt={post.title} />
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
