# Get the IAM policy for the service account and filter/format the output
policy_json=$(gcloud iam service-accounts get-iam-policy bimqlautomationindexing@bimqlblogautomation.iam.gserviceaccount.com --flatten="bindings[].members" --format="json")

# Check if the Service Account Token Creator permission is present
if echo "$policy_json" | grep -q '"roles/iam.serviceAccountTokenCreator"'; then
    echo "Service Account Token Creator permission is present"
else
    echo "Service Account Token Creator permission is NOT present"
fi

# Check if the Search Console API Viewer permission is present
if echo "$policy_json" | grep -q '"roles/viewer"'; then
    echo "Search Console API Viewer permission is present"
else
    echo "Search Console API Viewer permission is NOT present"
fi
