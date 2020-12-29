#!/bin/sh

DATA="./data/post.data.json"
curl -v http://api:8000/goals \
    -H "Content-Type: application/json"
