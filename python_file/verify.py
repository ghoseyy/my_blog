from google.oauth2 import service_account
import googleapiclient.discovery

def verify_ownership(url):
    """Verifies ownership of a URL using the Google Search Console API."""
    
    # Load the service account credentials.
    credentials = service_account.Credentials.from_service_account_file(
        filename="/Users/bimalchhetry/Documents/API/credentials.json",
        scopes=["https://www.googleapis.com/auth/webmasters"])

    # Create the Search Console API client.
    client = googleapiclient.discovery.build(
        "searchconsole", "v1", credentials=credentials)

    try:
        # Get the list of sites verified in the Search Console.
        sites = client.sites().list().execute()

        # Check if any sites are available.
        if "siteEntry" in sites:
            # Get the website ID for the URL.
            website_id = sites["siteEntry"][0]["id"]

            # Verify ownership of the URL.
            request_body = {"siteUrl": url, "type": "SITE"}
            response = client.siteVerification().webResource().create(
                parent=website_id, body=request_body).execute()

            # Print the verification status.
            print(response["verificationStatus"])
        else:
            print("No sites found in the Search Console.")
    except Exception as e:
        print("Error:", e)

# URL to verify ownership for
url_to_verify = "https://bimql.link"

# Call the verify_ownership function with the URL
verify_ownership(url_to_verify)
