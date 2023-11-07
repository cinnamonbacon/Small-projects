import requests
from bs4 import BeautifulSoup as bs
from datetime import date

github_user = 'cinnamonbacon'

url = 'https://github.com/'+github_user
r = requests.get(url)
soup = bs(r.content, 'html.parser')
today = date.today()
profile_contributions = soup.find('td', {'class': 'ContributionCalendar-day'}, {'data-date': today}).text.strip()

print(profile_contributions)