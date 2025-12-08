import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddInstrument = ({ onAdded }) => {
    const [form, setForm] = useState({
        instrument: "",
        brand: "",
        model: "",
        price: "",
        condition: "",
        usedOrNew: ""
    });

    const cleanPrice = Number(form.price.replace(/,/g, ""));
    const instrumentName = `${form.brand} ${form.instrument}`.trim();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 2500);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            await axios.post(
                "https://jauntytegu.onrender.com/api/instruments/",
                form,
                { headers: { Authorization: `Bearer ${token}` }}
            );

            setMessage(`${instrumentName} added!`);
            onAdded();
        } catch (err) {
            console.error(err);
            setMessage("Error adding instrument")
        }
    };

return ( 
    <form onSubmit={handleSubmit}>
        <h3>Add New Instrument</h3>
        
                {message && (
            <h3 style={{
                color: "#0c5460",
                padding: "10px",
                borderRadius: "6px",
                marginBottom: "10px"
            }}>
                {message}
            </h3>
        )}
        <input name="instrument" placeholder="Instrument" onChange={handleChange} />
        <input name="brand" placeholder="Brand" onChange={handleChange} />
        <input name="model" placeholder="Model" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="condition" placeholder="Condition" onChange={handleChange} />
        <input name="usedOrNew" placeholder="Used or New" onChange={handleChange} />

        <button id="addinstrument" type="submit">Add Instrument</button>
    </form>
    );
};

export default AddInstrument;
