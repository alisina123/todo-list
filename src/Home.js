import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlog] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    const DeleteItem = (id) => {
        const neBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(neBlogs);
    }
    useEffect(() => {
        setTimeout(() => {
            fetch(` http://localhost:8000/blogs`)
                .then(res => {
                    if (!res.ok) {
                        throw Error("Can not fetch data");
                    }
                    return res.json();
                })
                .then(data => {
                    setBlog(data);
                    setPending(false);
                })
                .catch(err => {
                    setError(err.message);
                    setPending(false);
                })
        }, 1000);
    }, [])
    return (
        <div className="card">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            <div class="card-body">
                {blogs && <BlogList blogs={blogs} DeleteItem={DeleteItem} />}
            </div>
        </div>
    );
}

export default Home;