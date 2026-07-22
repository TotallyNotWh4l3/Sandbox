import db from "../config/database.js";

function getByUserId(userId) {
    return new Promise((resolve, reject) => {
        db.get(
            `
            SELECT *
            FROM user_settings
            WHERE user_id = ?
            `,
            [userId],
            (error, row) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(row);
            },
        );
    });
}

function create(userId, settings) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            INSERT INTO user_settings (
                user_id,
                settings_json
            )
            VALUES (?, ?)
            `,
            [userId, JSON.stringify(settings)],
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

function update(userId, settings) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            UPDATE user_settings
            SET
                settings_json = ?,
                updated_at = CURRENT_TIMESTAMP
            WHERE
                user_id = ?
            `,
            [JSON.stringify(settings), userId],
            function (error) {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(this.changes);
            },
        );
    });
}

function remove(userId) {
    return new Promise((resolve, reject) => {
        db.run(
            `
            DELETE FROM user_settings
            WHERE user_id = ?
            `,
            [userId],
            function (error) {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(this.changes);
            },
        );
    });
}

export default {
    getByUserId,
    create,
    update,
    remove,
};
