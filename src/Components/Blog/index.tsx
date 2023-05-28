
import Layout from "../Layout/Index";
import Hero from "./Hero";
import BlogCard from "./BlogCards";
import Ponto from "./PontoBlog";

const Blog = ({ data }: any) => {
  return (
    <div>
      <Layout>
        <Hero />
        <BlogCard data={data} />
        <Ponto />
      </Layout>
    </div>
  );
};

export default Blog;
