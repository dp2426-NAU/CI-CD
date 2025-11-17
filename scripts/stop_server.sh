#!/bin/bash
echo "Stopping Node.js server if running..."
pkill -f "node server.js" || true
