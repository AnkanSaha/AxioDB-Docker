# Security Policy for AxioDB Docker

## Supported Versions

Below are the versions of AxioDB Docker that are currently being supported with security updates. Please make sure you are using a supported version to ensure you receive critical security patches.

| Version | Supported          |
| ------- | ------------------ |
| 1.2.x   | :white_check_mark: |
| 1.0.x   | :x:                |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in AxioDB Docker, we encourage you to report it responsibly. To report a vulnerability:

1. **Submit a report via email:** Send details to `security@axiodb.com` with the subject line "Security Vulnerability - AxioDB Docker."
2. **Provide necessary details:** Include a clear description of the vulnerability, steps to reproduce the issue, and potential impact. For Docker-specific issues, please include container configurations and environment details.
3. **Response time:** You can expect a response within 48 hours acknowledging receipt of your report.
4. **Resolution process:** If the vulnerability is accepted, we will work on a fix and keep you updated on the progress. If the vulnerability is declined, we will provide an explanation.

## Docker Security Recommendations

When using AxioDB Docker, consider these additional security practices:

1. **Use secure container configurations:** Avoid running containers with unnecessary privileges
2. **Regularly update your images:** Ensure you're using the latest version with `docker pull theankansaha/axiodb:latest`
3. **Secure your data volumes:** Properly restrict access to host directories used for data persistence
4. **Network security:** Only expose the ports you need for your specific use case

We value the contributions of the community and prioritize the security of AxioDB Docker users. Thank you for helping us maintain a secure platform.
