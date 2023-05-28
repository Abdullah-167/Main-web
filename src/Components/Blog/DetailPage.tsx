import Image from "next/image";
import Moment from "react-moment";

const DetailPage = ({
  postCategory,
  postDate,
  postTitle,
  headerImage,
  authorName,
  authorAvatar,
}: any) => {
  return (
    <div>
      <div className="relative">
        {headerImage && (
          <div>
            <Image
              src={headerImage}
              alt="Blog"
              className="object-cover w-full max-h-[70vh]"
              width={1000}
              height={700}
            />
          </div>
        )}
        <div className="overlay">
          <div className="max-w-6xl pt-10 mx-auto">
            <div className="mb-8">
              <span className="px-5 py-2 text-base font-normal text-gray-800 bg-white rounded-full opacity-30 mix-blend-normal">
                {postCategory}
              </span>
            </div>
            <h1 className="mb-10 text-4xl font-semibold text-gray-800 ">
              {postTitle}
            </h1>
            <div className="flex flex-row">
              <div>
                <Image
                  src={authorAvatar}
                  alt={authorName}
                  className="w-20 rounded-full "
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex flex-col self-center pl-4">
                <p className="text-base font-semibold text-gray-800 capitalize">
                  {authorName}
                </p>
                <p className="text-sm font-normal text-gray-400">
                  <Moment format="DD MMM">{postDate}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
