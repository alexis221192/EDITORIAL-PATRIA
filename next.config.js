/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permitir acceso desde IPs de red en desarrollo
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '192.168.100.41',  // IP de tu red local
  ],
}

module.exports = nextConfig
