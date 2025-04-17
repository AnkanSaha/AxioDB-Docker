## AxioDB Docker - Containerized JSON-based Database with Multi-Protocol Support

[![Docker Hub](https://img.shields.io/docker/pulls/theankansaha/axiodb.svg)](https://hub.docker.com/r/theankansaha/axiodb)
[![GitHub Container Registry](https://img.shields.io/badge/GHCR-available-green)](https://github.com/AnkanSaha/axiodb-docker/pkgs/container/axiodb)

### AxioDB Docker extends the core AxioDB database engine by providing a containerized solution that enables integration with multiple programming languages and systems through various communication protocols. This Docker image packages the lightweight, file-based JSON database with additional services that expose its functionality via REST APIs, TCP connections, WebSocket, GRPC, and UDP.

#### Features include:

- **Multi-Protocol Support:** Access AxioDB through REST APIs, TCP, WebSocket, GRPC, and UDP
- **Language-Agnostic Integration:** Connect from any programming language that supports standard network protocols
- **Containerized Deployment:** Simple setup with Docker for consistent environments
- **Persistent Data Storage:** Use Docker volumes to ensure data durability across container restarts
- **Multi-Architecture Support:** Compatible with various platforms for flexible deployment
- **Secure Communication:** Configure access controls and secure your database connections
- **Scalable Architecture:** Deploy multiple instances for increased throughput and availability

## Quick Start

To get started with AxioDB Docker, pull and run the container:

```shell
# Pull the image
docker pull theankansaha/axiodb:latest

# Run with basic configuration
docker run -d --name axiodb -p 27018:27018 -p 27019:27019 -p 27020:27020 -p 27021:27021 -p 27022:27022 theankansaha/axiodb:latest

# Test the REST API
curl http://localhost:27018/info
```

For persistent storage, add a volume:

```shell
docker run -d --name axiodb -p 27018-27023:27018-27023 -v axiodb-data:/app theankansaha/axiodb:latest
```

Check the [README.md](README.md) for complete documentation on all available configuration options and integration capabilities.
