#!/bin/sh

DATA="./data/edit.data.json"
curl -v -X PUT http://api:5000/goals/$1 -d @$DATA -H "Content-Type: application/json"