import User from "../models/User.js";
import Password from "../utils/password.js";

async function seed() {
    try {
        const existingUser = await User.findByUsername("admin");

        if (existingUser) {
            console.log("Admin user already exists.");
            process.exit();
        }

        const passwordHash = await Password.hashPassword("password123");

        const userId = await User.create("admin", passwordHash, "admin");

        console.log(`Admin user created! ID: ${userId}`);
    } catch (error) {
        console.error(error);
    }

    process.exit();
}

seed();
