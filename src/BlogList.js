import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return (
        <div className="blog-list">
            <h2 style={{color : "#00DDDD", paddingLeft: "16px"}}>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to = {`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by <span>{blog.author}</span></p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;