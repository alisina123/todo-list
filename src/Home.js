import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
    
    const {data:blogs , isPending ,error}=UseFetch(`http://localhost:8000/blogs`);
 

  

    return (
        <div className="card">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            <div class="card-body">
                {blogs && <BlogList blogs={blogs} />}
            </div>
        </div>
    );
}

export default Home;