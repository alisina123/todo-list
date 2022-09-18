import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [author, setAuthor] = useState('alisina');
    const [loading ,setLoading] =useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name, lastName, author };
        console.log(blog);
        setLoading(true)
        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers:{"Content-Type" :"application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
            console.log("added")
            setLoading(false);
            
            
        })
        navigate('/');
    }
    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">lastName</label>
                    <input value={lastName} onChange={(e) => setlastName(e.target.value)} type="text" class="form-control"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1"> select</label>
                    <select value={author} onChange={(e) => setAuthor(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                        <option>ali</option>
                    </select>
                </div>
               {!loading && <button class="btn btn-primary">Add</button>}
               {loading && <button disabled class="btn btn-primary">Adding ...</button>}
            </form>
        </div>

    );
}

export default Create;