import axios from "axios";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
    
    const [apiData ,setDapiData]=useState(null);
    const [loading ,setLoading]=useState(true);
    const  [error ,setError] =useState(false);
 
    useEffect(() =>{
       
    const abourSignal =new AbortController();
       setTimeout(() =>{
        axios.get("http://localhost:8000/blogs" ,{signal:abourSignal.signal}).then((res) =>{
            //console.log("use effect is triggered");
            //console.log("data" ,res);
            setDapiData(res.data);
            setLoading(false);
           
        })
        .catch(error =>{
            setLoading(false)
            setError(error.message)
        })
       },1000);
       return ()=> abourSignal.abort();
    });
  
  
    return (
        <div className="blog-list">
            {loading && <div>loading ...</div>}
            {error && <div>error...</div>}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData && apiData.map((blog) => (
                        <tr key={blog.id}>
                            <th scope="row">{blog.id}</th>
                            <td>{blog.name}</td>
                            <td>{blog.lastName}</td>
                         

                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}

export default Home;