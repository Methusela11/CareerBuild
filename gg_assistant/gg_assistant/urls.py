from django.contrib import admin
from django.urls import include, path
from chatbot import views

urlpatterns = [
    path('', views.home),
    path('admin/', admin.site.urls),
    path('ai/', include('chatbot.urls')),
]
