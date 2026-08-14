const dev = process.env.NODE_ENV !== "production";

const devServer = typeof window !== "undefined" && "http://localhost:3000";

export const server = dev ? devServer : "https://www.webservicesbg.com/en";
