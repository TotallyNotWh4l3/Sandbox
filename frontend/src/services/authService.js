import API from "./apiClient";

export async function login(username, password) {
    return API.request("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
    });
}

export async function getCurrentUser(token) {
    return API.request("/api/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}
