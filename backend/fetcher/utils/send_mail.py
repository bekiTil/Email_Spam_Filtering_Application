from email.message import EmailMessage
import ssl, smtplib

#TODO: change speed

def send_mail(sender, password, receiver, subject, body):

    sender = "barterethiopia@gmail.com"
    password = "zvyjixbkyapzyocd"
    receiver = "dryeab@gmail.com"

    subject = "This is the subject of the email"
    body = """
    This is a multiline message

    Sincerely, 
    Best
    """

    message = EmailMessage()
    message['From'] = sender
    message['To'] = receiver
    message['subject'] = subject
    message.set_content(body)

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 512, context=context) as server:
        server.login(sender, password)
        server.sendmail(sender, receiver, message.as_string())