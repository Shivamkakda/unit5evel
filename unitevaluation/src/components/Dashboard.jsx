import { useState } from "react";
import "./dashboard.css"

export const Dashboard = () => {

    const initState = {
        companyName: "",
        jobTitle: "",
        salaryRange: "",
        jobDescription: "",
        location: "",
        jobType: ""
    }

    const [form, setForm] = useState(initState);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <>

            <div className="main">
                <form className="add_form" onSubmit={handleSubmit}>
               
                        <h2>Add new job</h2>
                        <input onChange={handleChange} name='companyName' className="form-control" type='text' placeholder="Company name" />
                        <input onChange={handleChange} name='jobTitle' className="form-control" type='text' placeholder="Job title" />
                        <input onChange={handleChange} name='salaryRange' className="form-control" type='text' placeholder="salary range" />
                        <input onChange={handleChange} name='jobDescription' className="form-control" type='text' placeholder="Job description" />
                        <input onChange={handleChange} name='location' type='text' className="form-control" placeholder="Location" />
                        <input onChange={handleChange} name='jobType ' type='text' className="form-control" placeholder="Job type " />
                        <button  className="btn" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};