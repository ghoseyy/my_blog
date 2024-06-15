from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
import os

# Authenticate with Google Search Console API
def authenticate():
    creds = None
    # Load credentials from file
    if os.path.exists('/Users/bimalchhetry/Documents/API/credentials.json'):
        creds = Credentials.from_authorized_user_info(
            {
                "token": None,
                "refresh_token": None,
                "id_token": None,
                "token_uri": None,
                "client_id": os.environ.get("GOOGLE_CLIENT_ID"),
                "client_secret": os.environ.get("GOOGLE_CLIENT_SECRET"),
                "scopes": ["https://www.googleapis.com/auth/webmasters"]
            }
        )
    else:
        print("Error: 'credentials.json' file not found.")
        return None

    # Build the service
    service = build('searchconsole', 'v1', credentials=creds)
    return service

# Function to submit URL for indexing
def submit_url(service, site_url, url):
    request = {
        'url': url,
        'type': 'URL_PREFIX',
        'reasons': ['URL_UPDATED'],
        'priority': 'HIGH'
    }

    try:
        response = service.urlTestingTools().requestInspection(siteUrl=site_url, body=request).execute()
        print(f"Submitted {url} for indexing.")
    except Exception as e:
        print(f"Error submitting {url} for indexing: {e}")

def main():
    # Authenticate with Google Search Console API
    service = authenticate()
    if not service:
        return

    # Your site URL
    site_url = 'https://bimql.link/'

    # List of URLs of your updated blog posts
    updated_urls = [
        'https://bimql.link/crafting-minimal-logo'
        # Add more URLs as needed
    ]

    # Submit each URL for indexing
    for url in updated_urls:
        submit_url(service, site_url, url)

if __name__ == '__main__':
    main()
