import imaplib, email 
from .ml import check 

host = 'imap.gmail.com'

def get_all(username, password, spam=False):
    
    imap = imaplib.IMAP4_SSL(host)
    
    # Login to remote server
    imap.login(username, password)

    imap.select('Inbox')

    _, msg_nums = imap.search(None, 'ALL') # is ok and message numbers

    messages = []

    for num in msg_nums[0].split():
        _, data = imap.fetch(num, '(RFC822)') # fetch the whole message

        message = email.message_from_bytes(data[0][1])

        msg = {
			'from': message.get('From'),
			'to': message.get('To'),
			'subject': message.get('subject')
		}

        for part in message.walk():
            if part.get_content_type() == 'text/plain':
                msg['body'] = '\n'.join(part.as_string().split('\n')[1:])
                break

        if check.is_spam(msg['subject'] + msg['body']) == spam:
            messages.append(msg)
        
    imap.close()
    imap.logout()

    return messages