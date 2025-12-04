import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return navigate("/login");

        axios.get("https://jauntytegu.onrender.com/api/auth/me", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(res => setUser(res.data))
        .catch(() => {
            localStorage.removeItem("token");
            navigate("/login");
        });
    }, []);

    if (!user) return <h3>Loading profile...</h3>;

    return (
        <div>
            <h2>My Profile</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>User ID:</strong> {user._id}</p>
        </div>
    );
};

export default Profile;
