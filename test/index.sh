#!/bin/sh

RUNTIME_CONFIG_PATH="./static/js/runtime-config.js"
WINDOW_OBJECT="window.THEME={THEME: "\"${THEME}\""}"
make_config() {
    echo $WINDOW_OBJECT >$RUNTIME_CONFIG_PATH
}

make_config

CONFIG_INJECTION_PARAM="s/<head>/<head><script src=\"\/static\/js\/runtime-config.js\"><\/script>/g"
inject_config() {
    sed -i "" -e "$CONFIG_INJECTION_PARAM" index.html
}

inject_config


# ls | grep .sh | grep -v index.sh | xargs rm -rf

# echo window.THEME={THEME: "${THEME}"} > ./runtime-config.js
