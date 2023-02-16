from email.message import EmailMessage
import ssl, smtplib

def send_mail(sender, password, receiver, subject, body):

    message = f"Subject: {subject} \n" + body

    smtp_server = "smtp.gmail.com"
    port = 587 

    context = ssl.create_default_context()

    try:
        server = smtplib.SMTP(smtp_server,port)
        server.ehlo() 
        server.starttls(context=context) 
        server.ehlo()
        server.login(sender, password)
        server.sendmail(sender, receiver, message)
    except Exception as e:
        print(e)
    finally:
        server.close()
        server.quit() 