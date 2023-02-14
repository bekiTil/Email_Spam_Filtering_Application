from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

def fetch_email(request):
    return HttpResponse("HELLO")
