## Getting Started
To start using this API wrapper, run the command `npm install discordbotslist` in the console.

## Usage
```js

const DisBots = require('discordbotslist');
const DisBotsClient = new DisBots("Bot's API token here");

DisBotsClient.postServerCount(10) // sends a request to the API

```