#!/bin/sh

CONFIG_INJECTION_PARAM="s/<head>/<head><script src=\"\/static\/js\/runtime-config.js\"><\/script>/g"

inject_config() {
    sed -i -e "$CONFIG_INJECTION_PARAM" index.html
}

inject_config