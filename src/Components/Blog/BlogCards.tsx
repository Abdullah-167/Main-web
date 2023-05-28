import Moment from "react-moment";
import Image from "next/image";
import Link from "next-translate-routes/link";

const BlogCard = ({ data }: any) => {
  return (
    <div className="w-full my-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map(({ node }: any, index: number) => {
            return (
              <Link href={`/blog-it-new/${node.slug}`} key={index}>
                <div className="bg-[#F2F2FA] rounded-lg flex self-stretch pb-8">
                  <div>
                    <div>
                      <Image
                        src={
                          node.featuredImage !== null
                            ? node.featuredImage.node.mediaItemUrl
                            : null
                        }
                        blurDataURL={
                          node.featuredImage !== null
                            ? node.featuredImage.node.mediaItemUrl
                            : null
                        }
                        alt={node.title}
                        placeholder="blur"
                        className="w-full object-cover rounded-t-lg article-img max-h-[235px]"
                        width={400}
                        height={235}
                      />
                    </div>
                    <h2 className="mx-5 mt-5 text-2xl text-[#4C4C4C] line-clamp-2">
                      {node.title}
                    </h2>
                    <p className="text-[17px] text-[#4C4C4C] mx-5 pt-3">
                      <Moment format="DD MMM YYYY">{node?.date}</Moment>
                    </p>
                    <p className="text-[17px] text-[#4C4C4C] mx-5 pt-3 line-clamp-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the{" "}
                      {`industry's`} standard dummy text ever since the 1500s
                    </p>
                    {/* <div className="flex flex-wrap items-center gap-1 mx-5 py-7">
                      <span className="px-3 py-1 text-sm text-white border border-gray-300 rounded-full cursor-pointer">
                        Outsourcing
                      </span>
                      <span className="px-3 py-1 text-sm text-white border border-gray-300 rounded-full cursor-pointer">
                        Web Development
                      </span>
                    </div> */}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
