import axios from "axios";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";
import { useNavigate } from "react-router-dom";
import Details from "./Details";
import { Link } from "react-router-dom";

const Home = () => {

    const [apiData, setDapiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {


        setTimeout(() => {
            axios.get("http://localhost:8000/blogs").then((res) => {
                //console.log("use effect is triggered");
                //console.log("data" ,res);
                setDapiData(res.data);
                setLoading(false);

            })
                .catch(error => {
                    setLoading(false)
                    setError(error.message)
                })
        }, 1000)

    });
    const DeleteBtn = (id) => {

        fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                navigate('/');
            });
    }

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
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData && apiData.map((blog) => (

                        <tr key={blog.id}>
                            <th scope="row">{blog.id}</th>
                            <td>{blog.name}</td>
                            <td>{blog.lastName}</td>
                            <td><button onClick={(event) => { DeleteBtn(blog.id) }}>delete</button></td>
                            <td>
                                <Link to={`details/${blog.id}`}>
                                    Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Home;