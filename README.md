# s2v-iia-facebook-node
#
# README.md
#
This project contains some simple Node.js code that does the following;
1. Accepts a message passed in as part of a REST API POST
2. Pushes that message to a FaceBook Page feed via the Facebook Graph API resulting in the message being displayed in a FaceBook feed

Limitations: 
1. In this release of this project we are relying on the access token being copied from developers.facebook.com - Graph API Explorer ..
This access token then needs to be copied and pasted into config.js file before running node server.js

Usage:
node server.js

Invoke from REST client
  // Usage POST : http://localhost:8081/postToFacebook?mymessage="my message post"
  // Usage POST : http://localhost:8081/postToFacebook?mymessage=my message post


