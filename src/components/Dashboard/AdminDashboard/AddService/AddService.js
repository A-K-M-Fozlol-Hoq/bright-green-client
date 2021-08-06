import React, { useState } from 'react';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        if(e.target.name==='serviceCode'){
            if(e.target.value.trim().length === 6){
                fetch("https://ancient-bayou-79993.herokuapp.com/isServiceCodeExist", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ serviceCode: e.target.value }),
            })
                .then((response) => response.json())
                .then((data) => {
                if (data === true) {
                    alert("Service code is not available. - Admin");
                    e.target.value='';
                } else {
                    alert("Service code is available. - Admin");
                    const newInfo = { ...info };
                    newInfo[e.target.name] = e.target.value;
                    setInfo(newInfo);
                }
                })
                .catch((error) => {
                console.error(error);
                });
            }
            else{
                alert('Enter a 6 digit code')
                e.target.value='';
            }
        }else{
            const newInfo = { ...info };
            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo);
        }
        
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(file && info.name && info.title && info.description && info.serviceCode && info.price){
            const formData = new FormData()
            console.log(info);
            formData.append('file', file);
            formData.append('name', info.name);
            formData.append('title', info.title);
            formData.append('price', info.price);
            formData.append('serviceCode', info.serviceCode);
            formData.append('description', info.description);
            fetch('https://ancient-bayou-79993.herokuapp.com/addService', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    alert('Service added successfully')
                    // if(data){
                    //     alert('Service added successfully')
                    // }
                    // else{
                    //     alert('Failed to add service: ')
                    // }
                })
                .catch(error => {
                    alert('Failed to add service: ')
                })
        }else{
            alert('Please Provide all data properly')
        }
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-8 rounded p-4 pr-5 mr-10 bg-primary" style={{ position: "absolute", right: 0 }}>
                <h5 style={{fontSize:'30px'}} className="text-white text-center bg-secondary m-5 p-3 rounded">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Service Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Service Title" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Service Price</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Service Price" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Service code(Unique)</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="serviceCode" placeholder="Service unique 6 digits code" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputEmail1">Service Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Enter description" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-warning mt-5">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;