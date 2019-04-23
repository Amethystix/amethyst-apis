# Amethyst API
An api made to be consumed by my website and blog, [amethyst.codes](https://amethyst.codes/).  It features the ability to get my blog entries from a database, as well as all other functionality of my site, including an endpoint that gives my current status.

# Features

## What am I up to?
One endpoint of my API is able to, using the time of the request being sent, grab a current activity from a list that I've entered, thus allowing my website to display a graphic showing a 'status' in the header based on the response.

A couple of endpoints have been made for fetching the blogs from firebase, though it is still incomplete.  Currently the blogs are live on my website.

## Blog
My API also contains endpoints that allow for searching, finding, and rendering blog posts from google firestore.

It also will allow for users to comment on the blogs, and will then store those comments in the database.  Currently a big WIP.

# Version
First release!  APIs are now [deployed to app engine](https://amethyst-apis.appspot.com/)
