const BlogList = ({blogs, title, handleDelete}) => {
    return (
        <div className="blog-list">
            <h2 style={{color : "darkcyan", paddingLeft: "16px"}}>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by <span>{blog.author}</span></p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;