import User from "../models/User.js";
import Password from "../utils/password.js";
import JWT from "../utils/jwt.js";

async function login(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required.",
            });
        }

        const user = await User.findByUsername(username);

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password.",
            });
        }

        const validPassword = await Password.comparePassword(password, user.password_hash);

        if (!validPassword) {
            return res.status(401).json({
                message: "Invalid username or password.",
            });
        }

        const token = JWT.generateToken(user);

        res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Internal server error.",
        });
    }
}

function me(req, res) {
    res.json({
        id: req.user.id,
        username: req.user.username,
        role: req.user.role,
    });
}

export default {
    login,
    me,
};
