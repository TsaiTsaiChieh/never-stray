#!/bin/sh
echo "Wait for services to start"
sleep 10;
echo "Run migration ..."
yarn typeorm:run
echo "===== END ====="