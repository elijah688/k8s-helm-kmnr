#!/bin/sh

RUNTIME_CONFIG_PATH="./static/js/runtime-config.js"
WINDOW_OBJECT="window.THEME={THEME: "\"${THEME}\""}"

make_config() {
    echo $WINDOW_OBJECT >$RUNTIME_CONFIG_PATH
}

make_config