import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Details = () => {
    const { id } = useParams();
    const [getData, setGetData] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`).then((res) => {
            setGetData(res.data);
        })
    });
    return (
        <div class="container">
            <h2>Details</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{getData.id}</td>
                        <td>{getData.name}</td>
                        <td>{getData.lastName}</td>
                        <td>{getData.author}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default Details;