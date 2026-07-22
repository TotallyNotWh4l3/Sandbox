import db from "../config/database.js";

import usersTable from "./schema/users.js";
import userSettingsTable from "./schema/userSettings.js";

db.serialize(() => {
    db.run(usersTable);
    db.run(userSettingsTable);

    console.log("Database initialized.");
});

db.close();
