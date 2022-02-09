echo "Stopping never-stray docker"
cd /home/ubuntu/never-stray
git checkout main
git pull
docker-compose down