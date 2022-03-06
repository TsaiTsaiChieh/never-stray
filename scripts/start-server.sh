echo "Start never-stray docker"
cd /home/ubuntu/never-stray
sudo sync && sudo sysctl -w vm.drop_caches=3
docker-compose --compatibility up -d