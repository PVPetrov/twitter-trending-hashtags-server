# twitter-trending-hashtags-server

## Instructions to start the server

1. Clone the repo
2. Run npm install to download all the dependancies
3. Create folder config, with index.js file, or config.js file at the root level
4. Export as default a cofig object containing preffered port - optional, and twitter app configs - mandatory as shown bellow

    ```
    twitter: {
        consumer_key: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
        consumer_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        access_token: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        access_token_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
  ```
5. Run npm start
