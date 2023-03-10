import os

import json
 
# Data to be written
dictionary = {
}

directory = ['./bathroom/','./bedroom/','./house/','./kitchen/','./livingroom/']
for dir in directory:
    for filename in os.listdir(dir):
        if dir not in dictionary:
            dictionary[dir] = []
        dictionary[dir].append(filename)
json_object = json.dumps(dictionary, indent=4)
 
# Writing to sample.json
with open("sample.json", "w") as outfile:
    outfile.write(json_object)