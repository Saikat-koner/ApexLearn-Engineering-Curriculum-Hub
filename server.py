#!/usr/bin/env python3
"""
ApexLearn Student Curriculum Portal - Python Backend Server
Runs a multi-threaded HTTP web server and automatically opens the portal in the default browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), CustomHTTPHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"================================================================")
        print(f"🎓 ApexLearn Student Curriculum Portal is running!")
        print(f"📍 Local URL: {url}")
        print(f"📁 Serving directory: {DIRECTORY}")
        print(f"🛑 Press Ctrl+C to stop the server.")
        print(f"================================================================")

        # Open in default browser
        webbrowser.open(url)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down ApexLearn server. Goodbye!")
            httpd.server_close()
            sys.exit(0)

if __name__ == "__main__":
    run_server()
