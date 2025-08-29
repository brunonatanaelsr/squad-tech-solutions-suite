#!/usr/bin/env bash

set -euo pipefail

API_URL=${1:-"http://localhost:3001"}
EMAIL=${2:-"bruno@move.com"}
PASSWORD=${3:-"15002031"}

echo "POST $API_URL/auth/login"
curl -i \
  -X POST "$API_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}"

echo

