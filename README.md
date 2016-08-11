# s2v-iia-facebook-node
#
# README.md
#
This project contains some simple Node.js code that does the following;
1. Passes a hard coded message to the Facebook Graph API resulting in the message being displayed in a FaceBook feed

Limitations: 
1. In the first release of this project we are relying on the access token being copied from developers.facebook.com - Graph API Explorer ..
This access token then needs to be copied and pasted into config.js file before running node server.js

Usage:
1. Clone or Download zip file
2. Install dependencies: npm install
3. Copy the "Access Token" from developers.facebook.com > Tools and Support > Graph API Explorer - Then past it into config.js
3. Run the code: node app
4. From a browser run:
http://localhost:8081/postToFacebook/HelloCarlos

5. Or from Postman or SOAPUI send the following message using POST:

http://localhost:8081/postToFacebook?mymessage=HelloCarlos
 
Any question or comment drop us an email at barack.dorman@gmail.com

Enjoy!


