#!/bin/sh

DATA="./data/post.data.json"
curl -v http://api:8000/goals -d @$DATA -H "Content-Type: application/json"