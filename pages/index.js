import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Keith's Blog</title>
        <meta
          name="description"
          content="This is Keith's blog about programming"
        />
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={props.featuredPosts} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredPosts = await getFeaturedPosts();

  return {
    props: { featuredPosts: featuredPosts },
    revalidate: 1800,
  };
}

export default HomePage;
