import Blog from "@/Components/Blog";
import Seo from "@/Components/Seo";

import { getAllPosts } from "@/lib/api";

const BlogList = ({ allPosts: { edges } }: any) => {
  return (
    <>
      <Seo title="Rafiky" description={``} />
      <Blog data={edges} />
    </>
  );
};

export default BlogList;
export async function getStaticProps(context: any) {
  const locale = context?.locale;
  const allPosts = await getAllPosts(locale);
  return {
    props: {
      allPosts,
    },
    revalidate: 10,
  };
}
