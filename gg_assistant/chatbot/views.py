import json
from django.http import JsonResponse
from .services.together_ai import ask_ai
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def home(request):
    return render(request, "index.html")

def chat(request):
    if request.method == "POST":
        body = json.loads(request.body)

        user_message = body.get("message")

        if not user_message:
            return JsonResponse({"error": "No message provided"}, status=400)

        reply = ask_ai(user_message)

        return JsonResponse({
            "user": user_message,
            "bot": reply
        })