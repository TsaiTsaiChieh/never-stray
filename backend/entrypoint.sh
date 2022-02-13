#!/bin/sh
echo "Run migration ..."
yarn typeorm:run
echo "Initializing area data ..."
yarn init:area
echo "===== END ====="
