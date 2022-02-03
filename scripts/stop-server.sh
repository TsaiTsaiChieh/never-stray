echo "Stopping never-stray docker"
cd /home/ubuntu/never-stray
git checkout develop
git pull
docker-compose down