import { useState ,useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState([
        { name: 'alisina', lastName: 'sadat', id: 1 },
        { name: 'karim', lastName: 'jan', id: 2 },
    ])
    const DeleteItem = (id) => {
        const neBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(neBlogs);
    }
    useEffect(()=>{
        console.log(blogs);
    },[])
    return (
        <div className="card">
            <div class="card-body">
                <BlogList blogs={blogs} DeleteItem={DeleteItem} />
            </div>
        </div>
    );
}

export default Home;