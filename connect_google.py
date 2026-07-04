import os
import pickle
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/drive.readonly']
CREDS_FILE = os.path.join(os.path.expanduser("~"), "Desktop", "JSON.json")
TOKEN_FILE = os.path.join(os.path.dirname(__file__), "references", "google_token.pkl")

creds = None
if os.path.exists(TOKEN_FILE):
    with open(TOKEN_FILE, 'rb') as token:
        creds = pickle.load(token)

if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    else:
        flow = Flow.from_client_secrets_file(
            CREDS_FILE,
            scopes=SCOPES,
            redirect_uri='http://127.0.0.1:8080/'
        )
        auth_url, _ = flow.authorization_url(prompt='consent')

        print('\n=== STEP 1 ===')
        print('Open this URL in your browser:\n')
        print(auth_url)
        print('\n=== STEP 2 ===')
        print('Sign in with richburg.lejohn@gmail.com and click Allow.')
        print('\n=== STEP 3 ===')
        print('Your browser will show a "this site can\'t be reached" error. THAT IS OK.')
        print('Copy the ENTIRE URL from your browser address bar and paste it below.')
        print()
        redirect_response = input('Paste the full address bar URL here: ')

        flow.fetch_token(authorization_response=redirect_response)
        creds = flow.credentials

    with open(TOKEN_FILE, 'wb') as token:
        pickle.dump(creds, token)

service = build('drive', 'v3', credentials=creds)

# Search for Culinary Crescendo / Baron Vieux related files
print('\nSearching your Drive for Culinary Crescendo files...\n')
keywords = ['Culinary', 'Crescendo', 'Baron', 'Scarlet', 'Satire', 'New Orleans', 'street']
query = ' or '.join([f"name contains '{k}'" for k in keywords])
results = service.files().list(
    q=query,
    pageSize=30,
    fields="files(id, name, modifiedTime)"
).execute()
files = results.get('files', [])

if files:
    print(f"Found {len(files)} related files:\n")
    for f in files:
        print(f"  - {f['name']}  (modified: {f['modifiedTime'][:10]})")
else:
    print("No related files found.")
