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
      // Docker-specific settings
      exp_backoff_restart_delay: 100, // Prevent restart loops in Docker
      kill_timeout: 10000, // Longer kill timeout for Docker
      wait_ready: true, // Wait for ready signal
      listen_timeout: 30000, // Longer listen timeout for Docker environments
      restart_delay: 3000, // Delay between restarts
      // Needed for Docker to keep PM2 running
      min_uptime: "30s", // Minimum uptime to consider app running successfully
      max_restarts: 50, // Maximum number of restarts on crash

      // Log settings
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      combine_logs: true,
      merge_logs: true,

      // Docker-specific error handling
      stop_exit_codes: [0], // Gracefully stop for these exit codes
      // Prevent Docker from exiting when process restarts
      no_daemon: true,
    },
  ],
};
