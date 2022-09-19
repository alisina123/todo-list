import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const defaultValues = {
      name: '',
      lastName: '',
      author: ''
}
const Update = () => {

      const { id } = useParams();
      const [loading, setLoading] = useState(false);
      const [editData, setEditData] = useState({})
      const [name, setName] = useState('');

      useEffect(() => {
            axios.get(`http://localhost:8000/blogs/${id}`).then((res) => {

                  setEditData(res.data);
            })
      });
      const handleEdit = (e) => {
            setEditData({ ...editData, [e.target.name]: e.target.value })

      }
      return (
            <div className="container">

                  <form >
                        <div class="form-group">
                              <label for="exampleFormControlInput1">Name</label>
                              <input type="text" value={editData.name} onChange={(e) => setName(e.target.value)} class="form-control"></input>
                        </div>
                        <div class="form-group">
                              <label for="exampleFormControlInput1">lastName</label>
                              <input type="text" value={editData.lastName}  class="form-control"></input>
                        </div>
                        <div class="form-group">
                              <label for="exampleFormControlSelect1"> select</label>
                              <select value={editData.author}  class="form-control" id="exampleFormControlSelect1">
                                    <option>ali</option>
                              </select>
                        </div>
                        <button class="btn btn-primary">Add</button>
                  </form>

            </div>

      );
}

export default Update;