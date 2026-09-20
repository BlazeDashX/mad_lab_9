// services/api.ts

import axios from "axios";
import Constants from "expo-constants";

// Read API URL dynamically from app.config.js extra field
// Switches between http://localhost:3000 (dev) and production URL via EXPO_PUBLIC_ENV
const BASE_URL = Constants.expoConfig?.extra?.apiUrl ?? "http://localhost:3000";

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
});
