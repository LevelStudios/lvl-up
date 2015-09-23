# lvl-up
#### Installation

Requirements:
Make sure you have gulp and jspm installed globally

	npm install gulp -g
	npm install jspm -g

Then run this command put in your github credentials

	jspm registry config github

Run these two commands to install dependencies after

	npm install
	jspm install -y

Run Gulp

	gulp

#### Troubleshooting

You may need to uninstall Node.js and re-install it via homebrew if you are recieving errors during the npm/jspm/gulp process.

If you can still run node even when you have uninstalled it, follow this article to completely remove Node.js and Npm.
http://hungred.com/how-to/completely-removing-nodejs-npm/

If you are still experiencing issues, check the permissions on your cloned branch to make sure you have Read & Write privileges.