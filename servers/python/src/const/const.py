from dotenv import load_dotenv
from os import environ

load_dotenv()

PORT = environ['PYTHON_SERVER_PORT'] or 50051
BASE_URL = environ['LOCAL_HOST'] or '[::]'
HOST = (f"{BASE_URL}:{PORT}")