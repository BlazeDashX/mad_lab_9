// services/api.ts

import axios from "axios";

// When testing on a physical device via Expo Go, replace 'localhost'
// with your development machine's local IP address.
// e.g. http://192.168.1.5:3000
// On web (browser), localhost:3000 works directly.

const BASE_URL = "http://localhost:3000";

export const api = axios.create({
    baseURL: BASE_URL,
    timeout: 8000,
    headers: {
        "Content-Type": "application/json",
    },
});
