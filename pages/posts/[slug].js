import Head from "next/head";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return (
    <div>
      <Head>
        <title>{props.singlePost.title}</title>
        <meta name="description" content={props.singlePost.excerpt} />
      </Head>
      <PostContent post={props.singlePost} />
    </div>
  );
};

export async function getStaticProps(context) {
  const postId = context.params.slug;

  const postDetail = await getPostData(postId);

  return {
    props: { singlePost: postDetail },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const allPostsFilenames = await getPostFiles();

  const slugs = allPostsFilenames.map((filename) =>
    filename.replace(/\.md$/, "")
  );

  const paths = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export default PostDetailPage;
