import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "../context/AuthContext";
import API_URL from "../constants/api";

export function useAuthState() {
    const [auth, setAuth] = useState({
        user: null,
        token: null,
        loading: true,
    });

    useEffect(() => {
        async function restoreSession() {
            const storedToken = localStorage.getItem("co-efficient-token");

            if (!storedToken) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${API_URL}/api/auth/me`, {
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Invalid session");
                }

                const currentUser = await response.json();

                setToken(storedToken);
                setUser(currentUser);

                console.log("[Auth] Session restored.");
            } catch {
                localStorage.removeItem("co-efficient-token");

                setUser(null);
                setToken(null);

                console.log("[Auth] Session expired.");
            }

            setLoading(false);
        }

        restoreSession();
    }, []);

    const login = useCallback(async (username, password) => {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        localStorage.setItem("co-efficient-token", data.token);

        setToken(data.token);
        setUser(data.user);

        console.log("[Auth] Login successful.");
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("co-efficient-token");

        setUser(null);
        setToken(null);

        console.log("[Auth] Logged out.");
    }, []);

    return {
        user,
        token,
        loading,

        login,
        logout,
    };
}

export function useAuth() {
    return useAuthContext();
}
