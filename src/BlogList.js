const BlogList = ({ blogs, DeleteItem }) => {

    return (
        <div className="blog-list">
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
                    {blogs.map((blog) => (
                        <tr key={blog.id}>
                            <th scope="row">{blog.id}</th>
                            <td>{blog.name}</td>
                            <td>{blog.lastName}</td>
                            <td><button onClick={() => DeleteItem(blog.id)}>DeleteItem</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BlogList;