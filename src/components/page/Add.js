import {useState} from "react";
import {useHistory} from "react-router-dom";

import '../../asset/css/add/add.css'


const Add = () => {
    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        date: new Date().toString(),
    });

    const handleChange = (e) =>
        setData({...data, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/3f8ef948-6002-4282-9805-b1e04da1d6c7",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (res.ok) {
                history.replace("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form className="add-form" style={{maxWidth: 500, margin: "auto"}} onSubmit={handleSubmit}>


            <div className="form add-form">
                <div className="subtitle ">Entrez vos information</div>
                <div className="input-container ic1 padding-div">
                    <input placeholder="nom" type="text" className="form-control input-add " name="name" value={data.name} onChange={handleChange} id="firstname"/>
                    <div className="cut "></div>
                </div>
                <div className="input-container ic2 padding-div">
                    <input placeholder="email" type="email" className="form-control input " name="email" value={data.email} onChange={handleChange} id="lastname"/>
                    <div className="cut "></div>
                </div>
                <div className="input-container ic2 padding-div ">
                    <textarea placeholder="message" name="message" cols="30" rows="3" className="form-control " value={data.message} onChange={handleChange}/>
                    <div className="cut cut-short "></div>
                </div>
                <button type="text" className="icon ion-md-lock ">Validé</button>
            </div>
            {/*<h1 className="text-muted text-center">Add</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    name="message"
                    cols="30"
                    rows="3"
                    className="form-control"
                    value={data.message}
                    onChange={handleChange}
                />
            </div>
            <div className="text-center">
                <button className="btn btn-primary">Add</button>
            </div>*/}
        </form>
    );
};

export default Add;
