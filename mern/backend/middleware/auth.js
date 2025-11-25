const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    const authHeader = req.header("Authorization");

    // Check for missing token
    if (!authHeader) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    // Expected format: "Bearer tokenhere"
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }

    try {
        const decoded = jwt.verify(token, "secretkey"); // SAME secret used in login
        req.user = decoded.id;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};
