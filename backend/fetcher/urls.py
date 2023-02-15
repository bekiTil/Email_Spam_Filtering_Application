from django.urls import path 
from . import views 

urlpatterns = [
    path("login/", views.login),
    path("inbox/", views.inbox),
    path("spam/", views.spam),
    path("sent/", views.sent),
    path("send_email/", views.send_email)
]