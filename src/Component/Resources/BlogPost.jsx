import { Link } from "react-router-dom";

const BlogPost = () => {
  const posts = [
    {
      id: 1,
      image:
        "https://landpress.keydesign.xyz/email-marketing/wp-content/uploads/sites/6/2023/08/blog-post-4.jpg",
      categories: ["Guides", "Software"],
      title: "Responsive design tricks for mobile-friendly pages",
      date: "August 21, 2023",
      author: {
        name: "Luke Jacobs",
      },
      comments: {
        count: 3,
      },
      description:
        "When everyone understands and believes in the shared goal, they are motivated to work cohesively.",
    },
    {
      id: 2,
      image:
        "https://landpress.keydesign.xyz/email-marketing/wp-content/uploads/sites/6/2023/08/blog-post-5.jpg",
      categories: ["Business", "Software"],
      title: "How page load times affect conversions: a deep dive",
      date: "August 21, 2023",
      author: {
        name: "Luke Jacobs",
      },
      comments: {
        count: 3,
      },
      description:
        "Putting the customer at the core of your product development ensures relevance and resonance.",
    },
    {
      id: 3,
      image:
        "https://landpress.keydesign.xyz/email-marketing/wp-content/uploads/sites/6/2023/08/blog-post-6.jpg",
      categories: ["Business", "Technology"],
      title: "Building trust with secure transactions: best practices",
      date: "August 21, 2023",
      author: {
        name: "Luke Jacobs",
      },
      comments: {
        count: 3,
      },
      description:
        "Students must be equipped with the skills to navigate the digital world effectively.",
    },
  ];

  return (
    <div className="2xl:px-20 xl:px-20 lg:px-20 md:px-10 sm:px-10 px-2">
      {posts.map((post) => (
        <div
          key={post.id}
          className=" bg-white shadow-md scale-95 duration-200 hover:scale-100 rounded-md overflow-hidden mb-6 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-[80%] w-[90%] justify-center mx-auto"
        >
          <div>
            <Link title={post.title}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full 2xl:h-[360px] xl:h-[360px] lg:h-[360px] md:h-[300px] sm:h-[300px] h-[280px]"
                loading="lazy"
              />
            </Link>
          </div>
          <div className=" p-4">
            <div className=" text-sm text-gray-500 mb-2">
              {post.categories.map((category, index) => (
                <span key={index} className="blog-label mr-2">
                  <Link className="text-brand text-xl font-medium font-NunitoFont">
                    {category}
                  </Link>
                  {index < post.categories.length - 1 && ","}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-medium text-primary font-Monrope mb-2">
              <Link className="font-normal font-Popins text-primary text-base">
                {post.title}
              </Link>
            </h2>
            <div className=" mb-4">
              <span className="published mr-4">{post.date}</span>
              <span className="author mr-4">
                <Link className="font-normal font-Popins text-brand text-base">
                  {post.author.name}
                </Link>
              </span>
            </div>
            <div>
              <p  className=" 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-[80%] sm:w-[90%] w-[95%] font-normal font-Opensans text-primary text-base">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;
