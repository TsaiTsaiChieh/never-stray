echo "Stopping never-stray docker"
cd /home/ubuntu/never-stray
docker-compose stop
sudo sync && sudo sysctl -w vm.drop_caches=3