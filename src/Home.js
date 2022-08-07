import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [isPending, setPending] = useState(true);
    const DeleteItem = (id) => {
        const neBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(neBlogs);
    }
    useEffect(() => {
        setTimeout(() => {
            fetch(` http://localhost:8000/blogs`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlog(data);
                    setPending(false);
                })
        }, 1000);
    }, [])
    return (
        <div className="card">
            {isPending && <div>Loading</div>}
            <div class="card-body">
                {blogs && <BlogList blogs={blogs} DeleteItem={DeleteItem} />}
            </div>
        </div>
    );
}

export default Home;