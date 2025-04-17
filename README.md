# AxioDB Docker: Extend AxioDB's Power

AxioDB Docker is designed to extend the capabilities of AxioDB, enabling seamless integration with other programming languages and systems via REST APIs, TCP connections, WebSocket, and more. This Docker image provides a scalable and efficient way to deploy AxioDB as a service.

## 🚀 Features

- **REST API Integration:** Expose AxioDB functionalities via RESTful APIs for easy access from any programming language.
- **TCP Connections:** Establish direct communication using TCP protocols.
- **GRPC Support:** Enable efficient RPC communication between services.
- **UDP Communication:** Support for connectionless protocols.
- **Persistent Data Storage:** Use Docker volumes to ensure data durability across container restarts.
- **Multi-Architecture Support:** Compatible with various platforms for flexible deployment.
- **Plug-and-Play Deployment:** Simplify AxioDB setup with a pre-configured Docker image.

## 🛠️ Quick Start

### Pulling the Docker Image

**From Docker Hub:**
```bash
docker pull theankansaha/axiodb:latest
```

**From GitHub Container Registry:**
```bash
docker pull ghcr.io/ankansaha/axiodb:latest
```

### Running the Container

**Basic setup with all ports exposed:**
```bash
docker run -d --name axiodb -p 27018:27018 -p 27019:27019 -p 27020:27020 -p 27021:27021 -p 27022:27022 -p 27023:27023 theankansaha/axiodb:latest
```

**With persistent data volume:**
```bash
docker run -d --name axiodb -p 27018:27018 -p 27019:27019 -p 27020:27020 -p 27021:27021 -p 27022:27022 -p 27023:27023 -v axiodb-data:/app theankansaha/axiodb:latest
```

**Using custom host directories for persistence:**
```bash
docker run -d --name axiodb -p 27018:27018 -p 27019:27019 -p 27020:27020 -p 27021:27021 -p 27022:27022 -p 27023:27023 -v /path/on/host/data:/app theankansaha/axiodb:latest
```

## ⚙️ Configuration

### Port Configuration

| Port | Service |
|------|---------|
| 27018 | REST API Server |
| 27019 | TCP Server |
| 27020 | GRPC Server |
| 27021 | WebSocket Server |
| 27022 | UDP Server |
| 27023 | Reserved for future use |

### Volumes

For data persistence, mount a volume to `/app`:

- **Named volume:** `-v axiodb-data:/app`
- **Host directory:** `-v /path/on/host/data:/app`

This ensures your database data remains intact even if the container is removed.

## 🔧 Verifying the Installation

Check if your container is running:
```bash
docker ps
```

Test the REST API:
```bash
curl http://localhost:27018/info
```

Expected output:
```json
{"status":"OK"}
```

## 🌐 Integration Capabilities

**AxioDB Docker enables integration with other programming languages and systems through**:

- **REST APIs (Port 27018):** Access AxioDB's features via HTTP endpoints.
- **TCP Connections (Port 27019):** Establish custom communication protocols.
- **GRPC (Port 27020):** Efficient client-server communication.
- **WebSocket (Port 27021):** Enable real-time data synchronization and event-driven communication.
- **UDP (Port 27022):** Support for connectionless communication.

## 🏗️ Building the Image Locally

```bash
git clone https://github.com/AnkanSaha/axiodb-docker.git
cd axiodb-docker
docker build -t axiodb/axiodb:latest .
```

## 🤝 Contributing

Contributions are welcome! Whether it's improving the Docker image, adding new features, or enhancing documentation, your input is valuable. Please submit a Pull Request to get started.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.