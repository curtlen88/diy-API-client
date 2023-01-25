import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewBlog() {
    const [form, setForm] = useState({
        name: "",
        title: "",
        content: "",
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        axios.post(`${process.env.REACT_APP_SERVER_URL}/cobblog`, form)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch(console.warn)
    }

    return (
        <div>
            {/* form to collect blog info */}
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name" 
                    id="name"
                    value={form.name}
                    onChange={(event => setForm({...form, name: event.target.value}))}
                />
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={form.title}
                    onChange={(event => setForm({...form, title: event.target.value}))}
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    value={form.content}
                    onChange={(event => setForm({...form, content: event.target.value}))}
                />
            </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}