#!/bin/sh

CURL=curl
JQ=jq
STAT=stat

APIKEY=$1
ORIGIN=$2
DEST=$3

## parameter check 
if [ -z "$APIKEY" -o -z "$ORIGIN" ]; then
    echo "[USAGE] $0 APIKEY ORIGIN"
    echo "APIKEY can obtain https://tinypng.com"
    exit 1
fi

ORIGIN_FILE=$(basename "$ORIGIN")
BASEDIR=$(dirname $ORIGIN)
FNAME="${ORIGIN_FILE%.*}"
EXT="${ORIGIN_FILE##*.}"

SHRINK=$BASEDIR/$FNAME"_shrink."$EXT
SHRINK=$3

## jq exist check
if ! command -v "$JQ"; then
    echo "$JQ is not installed. Download $JQ first."
    echo "brew install $JQ"
    exit 1
fi

$CURL --user api:$APIKEY --data-binary @$ORIGIN https://api.tinify.com/shrink | jq '.output.url' | xargs -n 1 $CURL --output $SHRINK

ORIGIN_SIZE=$($STAT -f%z $ORIGIN)
SHRINK_SIZE=$($STAT -f%z $SHRINK)

echo $SHRINK" is downloaded. origin = "$ORIGIN_SIZE" bytes, shrink = "$SHRINK_SIZE" bytes"
