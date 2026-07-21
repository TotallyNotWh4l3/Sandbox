import db from "../config/database.js";

function findByUsername(username) {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM users WHERE username = ?", [username], (error, row) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(row);
        });
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        db.get("SELECT * FROM users WHERE id = ?", [id], (error, row) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(row);
        });
    });
}

function create(username, passwordHash, role = "user") {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO users (username, password_hash, role)
             VALUES (?, ?, ?)`,
            [username, passwordHash, role],
            function (error) {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(this.lastID);
            },
        );
    });
}

export default {
    findByUsername,
    findById,
    create,
};
