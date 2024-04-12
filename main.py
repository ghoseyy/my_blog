from google.oauth2 import service_account
from googleapiclient.discovery import build

def authenticate():
    credentials = service_account.Credentials.from_service_account_file(
        '/Users/bimalchhetry/Documents/My_blog/credentials.json',
        scopes=['https://www.googleapis.com/auth/webmasters']
    )

    service = build('searchconsole', 'v1', credentials=credentials)
    return service

def submit_url(service, site_url, url):
    try:
        request = service.sites().inspect(
            url=site_url + url
        ).execute()
        print(f"Submitted {url} for indexing.")
    except Exception as e:
        print(f"Error submitting {url} for indexing: {e}")

def main():
    service = authenticate()
    if not service:
        return

    site_url = 'https://bimql.link/'

    updated_urls = [
        'crafting-minimal-logo'
    ]

    for url in updated_urls:
        submit_url(service, site_url, url)

if __name__ == '__main__':
    main()
