import { useRouter } from "next/router";
import { getAllPostsWithSlug, getPost } from "@/lib/api";
import DetailPage from "@/Components/Blog/DetailPage";
import Layout from "@/Components/Layout/Index";
import Seo from "@/Components/Seo";
import { GetStaticProps } from "next/types";


type ArticleSinglePageProps = {
  postData: any;
};


const ArticleSinglePage: React.FC<ArticleSinglePageProps> = ({ postData }) => {
  const router = useRouter();
  if (!router.isFallback && !postData?.slug) {
    return <p>something went wrong!</p>;
  }

  const featueredImage = postData?.featuredImage?.node?.sourceUrl;
  const authorName = postData?.author.node.name;
  const authorAvatar = postData?.author.node.avatar.url;
  const postDate = postData?.date;
  const postTitle = postData?.title;
  const postCategory = postData?.categories.edges[0].node.name;

  return (
    <Layout>
      <Seo title="Rafiky" description={``} />
      {router.isFallback ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <DetailPage
            postCategory={postCategory}
            postDate={postDate}
            postTitle={postTitle}
            headerImage={featueredImage}
            authorName={authorName}
            authorAvatar={authorAvatar}
          />
          <div className="max-w-6xl py-10 mx-auto text-gray-600 blogWrapper">
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ArticleSinglePage;

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts.edges.map(({ node }: any) => `/blog-it-new/${node.slug}`) || [],
    fallback: true,
  };
}


export const getStaticProps: GetStaticProps<ArticleSinglePageProps> = async ({ params }) => {
  if (!params || !params.slug) {
    // Handle the case where params or params.slug is undefined
    return {
      notFound: true, // or any other error handling logic
    };
  }

  // Provide a default language or replace it with your own logic
  const language = "en"; // Replace with the correct default language
  const data = await getPost(params.slug as string, language);
  
  return {
    props: {
      postData: data.post,
    },
    revalidate: 10,
  };
};