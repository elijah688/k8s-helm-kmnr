#!/bin/sh

DATA="./data/edit.data.json"
curl -v -X DELETE http://api:5000/goals/$1