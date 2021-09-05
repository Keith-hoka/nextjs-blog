import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  return (
    <div>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all posts about programming"
        />
      </Head>
      <AllPosts posts={props.allPosts} />
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts: allPosts },
    revalidate: 1800,
  };
}

export default AllPostsPage;
