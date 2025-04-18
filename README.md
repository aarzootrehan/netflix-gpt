# What are we building today?

# Non Logged in experience
Login/ Sign up page - Sign in screen - route
- after signin - redirect to browse page

# Logged in experience
- Browse page
- Header
- Main movie
    - Trailer in background - video running
    - Trailer has two btns - title & description
    - Movie Suggestions then after
        - Movie Lists * n
- Netflix GPT
    - Search bar
    - Movie suggestions


Steps:
- Register TMDB API and fetch the API key and access tokens
- Make API call to fetch the now playing API

# Left overs
Display name is not being populated in Header.js in {user.displayName}
Pick photo url from when user logged in and display it in Header.js
Fix the video and posters are overlapping