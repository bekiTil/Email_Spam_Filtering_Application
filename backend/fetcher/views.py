import imaplib
from django.shortcuts import render
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .utils import fetch_sent, receive, send_mail
import json 

@csrf_exempt
def inbox(request):
    # print('heee')
    # print(request)
    # print(request.method)
    # print(request.body, type(request.body))
    if request.method == "POST":
        # print('heheh')
        try:
            body = json.loads(request.body)
            print(body, type(body), )
            username = body['username']
            password = body['password']
            print('the user', username, password)
            return JsonResponse({
                'ok': True,
                'messages': receive.get_all(username=username, password=password),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def spam(request):
    # print('heee')
    # print(request)
    # print(request.method)
    # print(request.body, type(request.body))
    if request.method == "POST":
        # print('heheh')
        try:
            body = json.loads(request.body)
            print(body, type(body), )
            username = body['username']
            password = body['password']
            print('the user', username, password)
            return JsonResponse({
                'ok': True,
                'messages': receive.get_all(username=username, password=password, spam=True),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def sent(request):
    # print('heee')
    # print(request)
    # print(request.method)
    # print(request.body, type(request.body))
    if request.method == "POST":
        # print('heheh')
        try:
            body = json.loads(request.body)
            print(body, type(body), )
            username = body['username']
            password = body['password']
            print('the user', username, password)
            return JsonResponse({
                'ok': True,
                'messages': fetch_sent.get_all(username=username, password=password),
                })
        except:
            pass 

    return JsonResponse({'ok': False})

@csrf_exempt
def login(request):
    print('heee')
    print(request)
    print(request.method)
    print(request.body, type(request.body))
    if request.method == "POST":
        print('heheh')
        try:
            body = json.loads(request.body)
            print(body, type(body), )
            username = body['username']
            password = body['password']
            host = 'imap.gmail.com'
            imap = imaplib.IMAP4_SSL(host)
            print('heeere 1', username, password)
            imap.login(username, password)
            print('heeere 3')
            print(JsonResponse({'ok': True, 'data':{'username': username, 'password': password},}))
            return JsonResponse({'ok': True, 'data':{'username': username, 'password': password},})
        except:
            pass 
    print('not ok')
    return JsonResponse({'ok': False})

@csrf_exempt
def send_email(request):
    pass 