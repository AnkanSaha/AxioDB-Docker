module.exports = {
  apps: [
    {
      name: "axiodb-service",
      script: "./build/config/docker.js",
      instances: "max", // Use all available CPUs
      exec_mode: "cluster", // Enable cluster mode
      autorestart: true, // Restart on failure
      watch: false, // Disable watch mode in production
      max_memory_restart: "500M", // Restart if memory exceeds 500MB per process
      env: {
        NODE_ENV: "production",
      },
      // Important for multiple servers on different ports
      listen_timeout: 10000, // Time to wait for the server to start listening
      kill_timeout: 5000, // Time to wait for the server to shut down
      // Custom port handling for each server type
      // These are already defined in your code, so PM2 will respect them
      // Each server listens on its own port as defined in ServerPorts enum
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      combine_logs: true,
      merge_logs: true,
    }
  ],
};
