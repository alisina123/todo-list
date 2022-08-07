import { useState ,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState(null)
    const DeleteItem = (id) => {
        const neBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(neBlogs);
    }
    useEffect(()=>{
        fetch(` http://localhost:8000/blogs`)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setBlog(data);
        })
    },[])
    return (
        <div className="card">
            <div class="card-body">
                { blogs && <BlogList blogs={blogs} DeleteItem={DeleteItem} />}
            </div>
        </div>
    );
}

export default Home;