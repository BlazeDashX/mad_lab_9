// app.config.js — dynamic configuration file (Feature 3)
module.exports = ({ config }) => ({
    ...config,
    extra: {
        ...config?.extra,
        apiUrl:
            process.env.EXPO_PUBLIC_ENV === "production"
                ? "https://api.studentdirectory.aiub.edu"
                : "http://localhost:3000",
    },
});
