"""
Simple Python Server for Insha Rani's Portfolio
Run with:
    python server.py

No npm or Node.js required!
"""

import os
import sys
import webbrowser

PORT = 3000

# Prefer serving the standalone HTML or dist
if os.path.exists("standalone_portfolio.html"):
    HTML_FILE = "standalone_portfolio.html"
else:
    HTML_FILE = "index.html"

try:
    # Try FastAPI if installed
    from fastapi import FastAPI
    from fastapi.responses import HTMLResponse
    import uvicorn

    app = FastAPI(title="Insha Rani Portfolio")

    @app.get("/", response_class=HTMLResponse)
    def read_root():
        with open(HTML_FILE, "r", encoding="utf-8") as f:
            return f.read()

    if __name__ == "__main__":
        print(f"🚀 FastAPI running at: http://localhost:{PORT}")
        webbrowser.open(f"http://localhost:{PORT}")
        uvicorn.run(app, host="127.0.0.1", port=PORT)

except ImportError:
    # Fallback to standard Python built-in server (always available in every Python)
    import http.server
    import socketserver

    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def do_GET(self):
            if self.path == "/" or self.path == "":
                self.send_response(200)
                self.send_header("Content-type", "text/html")
                self.end_headers()
                with open(HTML_FILE, "rb") as f:
                    self.wfile.write(f.read())
            else:
                super().do_GET()

    if __name__ == "__main__":
        print(f"🚀 Python server running at: http://localhost:{PORT}")
        print("Press Ctrl+C to stop.")
        webbrowser.open(f"http://localhost:{PORT}")
        with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
            httpd.serve_forever()
