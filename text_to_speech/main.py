from flask import Flask, request, send_from_directory

from text_to_speech.models.api import convert_text_to_speech
from text_to_speech.utils import save_audio

from uuid import uuid4

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/text-to-speech", methods=["POST"])
def text_to_speech():
    text = request.json["text"]
    audio, sample_rate = convert_text_to_speech(text)
    file_id = uuid4()
    save_audio(audio, sample_rate, file_id)
    return f"/audio/{file_id}.wav"


@app.route("/audio/<path:audio_file>")
def get_audio(audio_file):
    return send_from_directory("audio", audio_file)
