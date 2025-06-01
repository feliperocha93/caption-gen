from flask import Flask, request, send_from_directory
from flask_cors import cross_origin

from .models.api import convert_text_to_speech
from .utils import save_audio

from uuid import uuid4

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/text-to-speech", methods=["POST"])
@cross_origin()
def text_to_speech():
    text = request.json["text"]
    audio, sample_rate = convert_text_to_speech(text)
    file_id = uuid4()
    save_audio(audio, sample_rate, file_id)
    return [{ "url": f"/audio/{file_id}.wav"}]


@app.route("/audio/<path:audio_file>")
def get_audio(audio_file):
    return send_from_directory("audio", audio_file)
