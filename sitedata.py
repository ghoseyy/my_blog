from google.oauth2 import service_account
import googleapiclient.discovery

def get_site_data(url):
    """Gets site data for a URL using the Google Search Console API."""

    # Load the service account credentials.
    credentials = service_account.Credentials.from_service_account_file(
        filename="/Users/bimalchhetry/Documents/API/credentials.json",
        scopes=["https://www.googleapis.com/auth/webmasters.readonly"])

    # Create the Search Console API client.
    client = googleapiclient.discovery.build(
        "searchconsole", "v1", credentials=credentials)

    try:
        # Get the website ID for the URL.
        sites_list = client.sites().list().execute()
        site_entry = next((site for site in sites_list.get('siteEntry', []) if site['siteUrl'] == url), None)
        if site_entry:
            website_id = site_entry["id"]
            # Get the site data.
            site_data = client.sites().searchanalytics().query(
                siteUrl=url, startDate="2022-01-01", endDate="2024-12-31").execute()
            # Print the site data.
            print(site_data)
        else:
            print("Site not found in Search Console.")
    except Exception as e:
        print("Error:", e)

# Call the function with the URL "bimql.link"
get_site_data("https://bimql.link")
