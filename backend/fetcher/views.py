import imaplib
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .utils import fetch_sent, receive, send_mail
import json 

@csrf_exempt
def inbox(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            username = body['username']
            password = body['password']
            return JsonResponse({
                'ok': True,
                'messages': receive.get_all(username=username, password=password),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def spam(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            username = body['username']
            password = body['password']
            return JsonResponse({
                'ok': True,
                'messages': receive.get_all(username=username, password=password, spam=True),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def sent(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            username = body['username']
            password = body['password']
            return JsonResponse({
                'ok': True,
                'messages': fetch_sent.get_all(username=username, password=password),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def login(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            username = body['username']
            password = body['password']
            host = 'imap.gmail.com'
            imap = imaplib.IMAP4_SSL(host)
            imap.login(username, password)
            return JsonResponse({'ok': True, 'data':{'username': username, 'password': password},})
        except:
            pass 
    
    return JsonResponse({'ok': False})

@csrf_exempt
def send_email(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            send_mail.send_mail( 
                body['username'],
                body['password'],
                body['receiver'],
                body['subject'],
                body['body']
            )
            return JsonResponse({'ok': True})
        except:
            pass 

    return JsonResponse({'ok': False})