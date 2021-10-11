# CMC-Crypto-API
A web-scrapper for Coin Market Cap
First, download node.js, here's a link on how to do that - https://www.youtube.com/watch?v=AuCuHvgOeBY&ab_channel=DevSprout

--------------------------------------------------------------------------------------------------------------

To run your API, simply run the main.py file provided to you and you're good to go!
You can use the code runner extension in vs code or type (python main.py) wihtout parenthesis in the terminal to run the code.

--------------------------------------------------------------------------------------------------------------

                                                  EXPLANATION
    
    So, what final.js does is that it pulls the required data from the https://coinmarketcap.com/new/ url and 
    puts it in a raw JSON format and stores it in the Obj.json file.

    The main.py file parses the raw json data into readable format and refreshes in the given frame time input
    by the user. It controls all the other files present in the directory.
