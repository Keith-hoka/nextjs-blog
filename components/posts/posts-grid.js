import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <li>
          <PostItem key={post.slug} post={post} />
        </li>
      ))}
    </ul>
  );
}

export default PostsGrid;
