import requests
from django.conf import settings

API_URL = "https://api.together.xyz/v1/chat/completions"


def ask_ai(message, history=None):
    if history is None:
        history = []

    headers = {
        "Authorization": f"Bearer {settings.TOGETHER_API_KEY}",
        "Content-Type": "application/json"
    }

    messages = history + [
        {"role": "user", "content": message}
    ]

    payload = {
        "model": "mistralai/Mixtral-8x7B-Instruct-v0.1",
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 500
    }

    response = requests.post(API_URL, json=payload, headers=headers)

    if response.status_code == 200:
        data = response.json()
        return data["choices"][0]["message"]["content"]
    else:
        return f"Error: {response.text}"