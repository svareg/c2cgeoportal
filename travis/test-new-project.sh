#!/bin/bash -x

STATUS_CODE=$(curl --write-out %{http_code} --verbose --connect-timeout 1 --max-time 120 --retry 5 --silent --output /dev/null "http://localhost/travis/$1")

if [ $STATUS_CODE -eq 200 ]
then
    echo "OK"
    exit
else
    echo "Bad status code $STATUS_CODE"

    cd /tmp/travis/testgeomapfish

    sudo cat /var/log/apache2/error.log
    sudo cat /var/log/apache2/access.log
    curl "http://localhost/travis/$1" --connect-timeout 1 --max-time 120 --retry 5

    exit 1
fi
