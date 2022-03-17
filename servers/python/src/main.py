from server.server import serve
from dotenv import load_dotenv
from os import environ

if __name__=='__main__':
  load_dotenv()
  serve()