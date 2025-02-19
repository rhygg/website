module.exports = {
    TEAM_FETCH_API_BASE: "https://api.snowflakedev.org/api/d/staffs",
    NAV: [
        { label: "Home", path: "/", external: false },
        { label: "Team", path: "/team", external: false },
        { label: "Projects", path: "/projects", external: false },
        { label: "API", path: "https://api.snowflakedev.org", external: true },
        { label: "Documentation", path: "https://docs.snowflakedev.org", external: false },
        {
            label: "Discord",
            path: "https://discord.gg/uqB8kxh",
            external: true,
        },
        {
            label: "GitHub",
            path: "https://github.com/DevSnowflake",
            external: true,
        },
        {
            label: "Bot Hosting",
            path: "https://bluefoxhost.com",
            external: true,
        },
    ],
    LINKS: {
        DISCORD: "https://discord.gg/uqB8kxh",
        GITHUB: "https://github.com/DevSnowflake",
    },
    PROJECTS: [
        {
            name: "Canvacord",
            github: "DevSnowflake/Canvacord",
            npm: "canvacord",
            docs: "https://canvacord.js.org",
            description: "Image manipulation tool for beginners.",
        },
        {
            name: "QuickMongo",
            github: "DevSnowflake/QuickMongo",
            npm: "quickmongo",
            docs: "https://quickmongo.js.org",
            description: "Quick mongodb wrapper for beginners.",
        },
        {
            name: "SoundCloud Scraper",
            github: "DevSnowflake/SoundCloud-Scraper",
            npm: "canvacord",
            docs: "https://soundcloud-scraper.js.org",
            description: "Fetch data from SoundCloud easily!",
        },
        {
            name: "YouTube Search",
            github: "DevSnowflake/youtube-sr",
            npm: "youtube-sr",
            docs: "https://github.com/DevSnowflake/youtube-sr",
            description: "Simple package to make youtube search.",
        },
        {
            name: "Yukitoki",
            github: "DevSnowflake/yukitoki",
            docs: "https://docs.snowflakedev.org",
            description: "Customizable documentation rendering website written in Svelte.",
        },
        {
            name: "Discord YTDL Core",
            github: "DevSnowflake/discord-ytdl-core",
            npm: "discord-ytdl-core",
            docs: "https://github.com/DevSnowflake/discord-ytdl-core",
            description: "Simple ytdl wrapper for discord bots with custom ffmpeg args support.",
        },
        {
            name: "Web Screenshot",
            github: "DevSnowflake/websshot",
            npm: "websshot",
            docs: "https://github.com/DevSnowflake/websshot",
            description: "Simple package to take screenshot of given html or markdown code.",
        },
        {
            name: "Hackable Quick.db",
            github: "DevSnowflake/quick.db",
            npm: "@devsnowflake/quick.db",
            docs: "https://github.com/DevSnowflake/quick.db",
            description: "Superset of quick.db that you can hack into.",
        },
        {
            name: "Quick Economy",
            github: "DevSnowflake/quick.eco",
            npm: "quick.eco",
            docs: "https://eco.js.org",
            description: "Simple and powerful economy framework for Discord bots.",
        },
        {
            name: "Lowdash",
            github: "DevSnowflake/lowdash",
            docs: "https://github.com/DevSnowflake/lowdash",
            description: "A Python implementation of JavaScript Lodash library.",
        }
    ],
    YOUTUBE_CHANNEL_ID: "UCaxSqb45cc6Ero_RkMEId1Q",
    LOGIN_URL: `https://discord.com/api/oauth2/authorize?client_id=652874564098850826&redirect_uri=https%3A%2F%2Fsnowflakedev.org%2Flogin&response_type=code&scope=identify`,
    LOGIN_API: "https://backend.snowflakedev.org/api/authorize",
};
