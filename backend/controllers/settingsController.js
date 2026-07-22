import UserSettings from "../models/UserSettings.js";

async function getSettings(req, res) {
    try {
        const userId = req.user.id;

        const userSettings = await UserSettings.findByUserId(userId);

        if (!userSettings) {
            return res.json(null);
        }

        res.json(userSettings.settings);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to load settings.",
        });
    }
}

async function updateSettings(req, res) {
    try {
        const userId = req.user.id;

        const settings = req.body;

        await UserSettings.upsert(userId, settings);

        res.json({
            message: "Settings saved.",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to save settings.",
        });
    }
}

export default {
    getSettings,
    updateSettings,
};