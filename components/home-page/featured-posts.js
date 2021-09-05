import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

const AllPostsPage = (props) => {
  const { posts } = props;
  
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPostsPage;
