import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data : blog, isPending, error } = useFetch(`https://fakejson-server.herokuapp.com/blogs/${id}`);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`https://fakejson-server.herokuapp.com/blogs/${id}`, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by <span> {blog.author} </span></p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>
                        <img src="/trashcan.svg" alt="" id="can" />
                    </button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;