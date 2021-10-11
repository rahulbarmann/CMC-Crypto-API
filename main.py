import json
from subprocess import check_output
import time

timer = int(input("Please enter the amount of seconds you want the program to be refreshed in: "))
print("NOTE: Enter 'Ctrl+C to interrupt the code'")

try:
    while True:

        check_output(['node', 'index.js'])
        jasonfile = open('Obj.json', 'r')
        jasondata = jasonfile.read()

        obj = json.loads(str(jasondata))

        for i in range(len(obj)):
            print("\nRank:", obj[i].get("rank"))
            print("Name:", obj[i].get("name"))
            print("Price:", obj[i].get("price"))
            print("BlockChain:", obj[i].get("blockChain"))
            print("Time past since released:", obj[i].get("added"),"\n")

        jasonfile.close()

        time.sleep(timer)
        print("\n\n\n\n") 

except (KeyboardInterrupt):
    print("Program successful closed!")