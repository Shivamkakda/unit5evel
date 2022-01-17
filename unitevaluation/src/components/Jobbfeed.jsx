import { useEffect, useState } from "react";

export const Jobbfeed = () => {

    const [data, setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = () => {
        fetch(`http://localhost:3004/job`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setdata(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            })
    }

    return isLoading ? (
        <div>
            <h3>...loading</h3>
        </div>
    ) : (
        <>
            <h3>Jobs Available</h3>

                <button className="btns">Salary L-H</button>
                <button className="btns">Salary H-L</button>
                <select placeholder='Job type'>
                    <option value='Remote'>Remote</option>
                    <option value='Office'>Office</option>
                </select>
           
<div>
                {data.map(({ id, companyName, jobTitle, salaryRange, jobDescription, location, jobType }) => (
                    <div >
                        
                        <span />
                        <table fontSize={17}>
                            <div>
                                <tr>
                                    <td>Job Title</td>
                                    <td>{jobTitle}</td>
                                </tr>
                                <tr>
                                    <td>Salary Range</td>
                                    <td>₹ {salaryRange}</td>
                                </tr>
                                <tr>
                                    <td>Job Description</td>
                                    <td>{jobDescription}</td>
                                </tr>
                                <tr>
                                    <td>Job Title </td>
                                    <td>{location}</td>
                                </tr>
                            </div>
                        </table>
                        <button >Apply</button>
                    </div>
                ))}
            </div>

        </>
    );
};