import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddInstrument from "./AddInstrument";

const Dashboard = () => {
    const navigate = useNavigate();
    const [instruments, setInstruments] = useState([]);
    const [editId, setEditId] = useState(null);
    const [message, setMessage] = useState("");

    const [editForm, setEditForm] = useState({
        instrument: "",
        brand: "",
        model: "",
        price: "",
        condition: "",
        usedOrNew: ""
    });

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const loadInstruments = async () => {
        try {
            const response = await axios.get("https://jauntytegu.onrender.com/api/instruments");
            setInstruments(response.data.reverse());
        } catch (err) {
            console.error("Error loading instruments:", err);
            setMessage("Error loading instruments.")
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) navigate("/login");
    }, [navigate]);

    useEffect(() => {
        loadInstruments();
    }, []);

    const startEditing = (item) => {
        setEditId(item._id);
        setEditForm({
            instrument: item.instrument,
            brand: item.brand,
            model: item.model,
            price: item.price,
            condition: item.condition,
            usedOrNew: item.usedOrNew
        });
    };

    const cancelEditing = () => {
        setEditId(null);
    };

    const saveChanges = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.put(
                `https://jauntytegu.onrender.com/api/instruments/${id}`,
                editForm,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            setMessage("Instrument updated!")
            setEditId(null);
            loadInstruments();
        } catch (err) {
            console.error("Save failed:", err);
            setMessage("Save failed.");
        }
    };

    const deleteInstrument = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.delete(
                `https://jauntytegu.onrender.com/api/instruments/${id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setMessage("Instrument deleted!")
            loadInstruments();
        } catch (err) {
            console.error("Delete failed:", err);
            setMessage("Delete failed.");
        }
    };

    return (
        
        <div id="container" style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px" }}>
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                }}
                style={{
                    padding: "8px 14px",
                    backgroundColor: "#47D1FF",
                    color: "#333",
                    border: "2px solid black",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
                >
                    Logout
                </button>
        </div>
            <h2>Inventory</h2>
            {message && (
                <h3 
                    style={{
                        color: "#0c5460",
                        padding: "10px",
                        borderRadius: "6px",
                        marginBottom: "10px"          
                    }}
                >
                    {message}
                </h3>
            )}
            <AddInstrument onAdded={loadInstruments} />

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Instrument</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Condition</th>
                        <th>Used / New</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {instruments.map((item) => (
                        <tr key={item._id}>

                            {}
                            {editId === item._id ? (
                                <>
                                    <td>
                                        <input
                                            value={editForm.instrument}
                                            onChange={(e) =>
                                                setEditForm({ ...editForm, instrument: e.target.value })
                                            }
                                        />
                                    </td>

                                    <td>
                                        <input
                                            value={editForm.brand}
                                            onChange={(e) =>
                                                setEditForm({ ...editForm, brand: e.target.value })
                                            }
                                        />
                                    </td>

                                    <td>
                                        <input
                                            value={editForm.model}
                                            onChange={(e) =>
                                                setEditForm({ ...editForm, model: e.target.value })
                                            }
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="number"
                                            value={editForm.price}
                                            onChange={(e) =>
                                                setEditForm({ ...editForm, price: e.target.value })
                                            }
                                        />
                                    </td>

                                    <td>
                                        <input
                                            value={editForm.condition}
                                            onChange={(e) =>
                                                setEditForm({ ...editForm, condition: e.target.value })
                                            }
                                        />
                                    </td>

                                    <td>
                                        <select
                                            value={editForm.usedOrNew}
                                            onChange={(e) =>
                                                setEditForm({ ...editForm, usedOrNew: e.target.value })
                                            }
                                        >
                                            <option value="New">New</option>
                                            <option value="Used">Used</option>
                                        </select>
                                    </td>

                                    <td>
                                        <button onClick={() => saveChanges(item._id)}>Save</button>
                                        <button onClick={cancelEditing}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    {}
                                    <td>{item.instrument}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>
                                    <td>${item.price}</td>
                                    <td>{item.condition}</td>
                                    <td>{item.usedOrNew}</td>

                                    <td>
                                        <button onClick={() => startEditing(item)}>Edit</button>
                                        {""}
                                        <button onClick={() => deleteInstrument(item._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;

