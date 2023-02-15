import imaplib
from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .utils import fetch_sent, receive, send_mail

@csrf_exempt
def inbox(request):
    if request.POST:
        try:
            username = request.POST['username']
            password = request.POST['password']
            return JsonResponse({
                'ok': True,
                'messages': receive.get_all(username=username, password=password),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def spam(request):
    if request.POST:
        try:
            username = request.POST['username']
            password = request.POST['password']
            return JsonResponse({
                'ok': True,
                'messages': receive.get_all(username=username, password=password, spam=True),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def sent(request):
    if request.POST:
        try:
            username = request.POST['username']
            password = request.POST['password']
            return JsonResponse({
                'ok': True,
                'messages': fetch_sent.get_all(username=username, password=password),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def login(request):
    if request.POST:
        try:
            username = request.POST['username']
            password = request.POST['password']
            host = 'imap.gmail.com'
            imap = imaplib.IMAP4_SSL(host)
            imap.login(username, password)
            return JsonResponse({'ok': True})
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def send_email(request):
    pass 