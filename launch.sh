#!/usr/bin/env bash
# ApexLearn Portal Launcher for Linux/macOS
echo "Starting ApexLearn Student Curriculum Portal..."
if command -v xdg-open > /dev/null; then
  xdg-open index.html
elif command -v open > /dev/null; then
  open index.html
else
  echo "Please open index.html in your browser."
fi
