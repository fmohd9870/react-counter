import React, { useState } from 'react'

const Employee = () => {
    const [formData, setFormData] = useState({});
    const handleChange=(req)=>{
        let name=req.target.name;
        let value=req.target.value;
        setFormData(values=>({
            ...values,[name]:value
        }))
    }
    let formSubmit = async(e) => {
        e.preventDefault()
        console.log("formData", formData)
        try {
            let response= await fetch("http://localhost:8000/createEmployee",{
                method:"POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:JSON.stringify(formData)
            }) 
            let result=await response.json();
            console.log("response",result)
        } catch (error) {
            console.error("Error:",error)
        }
        // return response;
    }


    return (
        <div>
            <form onSubmit={formSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Designation
                            </td>
                            <td>
                                <input type="text" name="designation" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Address
                            </td>
                            <td>
                                <input type="text" name="address" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <input type="text" name='email' onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Employee