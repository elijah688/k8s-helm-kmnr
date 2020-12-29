#!/bin/sh

./make_config_file.sh &&
    ./load_config_path.sh &&
    ./remove_scripts.sh &&
    nginx -g "daemon off;"
