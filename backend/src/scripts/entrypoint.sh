#!/bin/sh
echo "Run migration ..."
yarn typeorm:run
echo "Initializing area & shelter data ..."
yarn init:enum-table
echo "===== END ====="
