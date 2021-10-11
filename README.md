# CMC-Crypto-API
A web-scrapper for Coin Market Cap

First, download `node.js`, here's a link on how to do that - https://www.youtube.com/watch?v=AuCuHvgOeBY&ab_channel=DevSprout

To run your API, simply run the `main.py` file provided to you and you're good to go!
You can use the code runner extension in VS code or type `python main.py` in the terminal to run the code.

--------------------------------------------------------------------------------------------------------------

# EXPLANATION
    
So, what `index.js` does is that it pulls the required data from the `https://coinmarketcap.com/new/` url and 
puts it in a raw JSON format and stores it in the `Obj.json` file.

The `main.py` file parses the raw json data into readable format and refreshes in the given frame time input
by the user. It controls all the other files present in the directory.
    
The data that is being pulled by `index.js` is the latest listings from the CoinMarketCap website and then 
being shown in a nicely formatted manner using main.py

--------------------------------------------------------------------------------------------------------------

# FOR DEVELOPERS --

In case you want to download your own libraries for node.js,

use `npm init -y` to initialise.
then use `npm install cheerio axios --save` to install the required libraries.

And you're good to go! `Happy Coding!`
