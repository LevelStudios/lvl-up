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

##### Mongodb Installation via homebrew on OSX
Pulled from [Mongodb docs](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

Hombrew install

	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

##### Mongodb Installation via homebrew on OSX
Pulled from [Mongodb docs](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

Hombrew install

	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

If you already have homebew installed

	brew update

Install Mongodb

	brew install mongodb
Run Gulp

	gulp

#### Troubleshooting

You may need to uninstall Node.js and re-install it via homebrew if you are recieving errors during the npm/jspm/gulp process.

If you can still run node even when you have uninstalled it, follow this article to completely remove Node.js and Npm.
http://hungred.com/how-to/completely-removing-nodejs-npm/

If you are still experiencing issues, check the permissions on your cloned branch to make sure you have Read & Write privileges.

http://hungred.com/how-to/completely-removing-nodejs-npm/

1. Create the data directory.
	*  ```mkdir -p /data/db```
2. Set permissions for the data directory.
If you are still experiencing issues, check the permissions on your cloned branch to make sure you have Read & Write privileges.
	*  ```sudo chmod 0755 /data/db```
	*  ```sudo chown mongod:mongod /data/db```
3. Run Mongodb
	*  ```mongod```
