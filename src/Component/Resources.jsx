import Banner from "./Banner"
import BlogPost from "./Resources/BlogPost"

const Resources = () => {
  return (
    <section>
      <div className="container mx-auto py-10">
        <Banner Heading={"Blog"} para={"Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."} menu={"Blog"}/>
        <BlogPost/>
      </div>
    </section>
  )
}

export default Resources
