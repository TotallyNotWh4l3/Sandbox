const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

async function request(endpoint, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const text = await response.text();
    let data = null;
    if (text) {
        try {
            data = JSON.parse(text);
        } catch {
            data = text;
        }
    }
    if (!response.ok) {
        throw new Error(data?.message ?? "Request failed.");
    }
    return data;
}

export default {
    request,
};
