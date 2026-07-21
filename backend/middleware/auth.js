import JWT from "../utils/jwt.js";

function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header missing.",
        });
    }

    const token = authHeader.replace("Bearer ", "");

    try {
        const user = JWT.verifyToken(token);

        req.user = user;

        next();
    } catch {
        return res.status(401).json({
            message: "Invalid or expired token.",
        });
    }
}

export default authenticate;
