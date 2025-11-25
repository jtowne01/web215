import React, { useState } from 'react';
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

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            await axios.post(
                "https://jauntytegu.onrender.com/api/instruments",
                form,
                { headers: { Authorization: `Bearer ${token}` }}
            );

            alert("Instrument added!");

            onAdded();
        } catch (err) {
            console.error(err);
            alert("Error adding instrument")
        }
    };

return ( 
    <form onSubmit={handleSubmit}>
        <h3>Add New Instrument</h3>

        <input name="instrument" placeholder="Instrument" onChange={handleChange} />
        <input name="brand" placeholder="Brand" onChange={handleChange} />
        <input name="model" placeholder="Model" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="condition" placeholder="Condition" onChange={handleChange} />
        <input name="usedOrNew" placeholder="Used or New" onChange={handleChange} />

        <button type="submit">Add Instrument</button>
    </form>
    );
};


export default AddInstrument;
