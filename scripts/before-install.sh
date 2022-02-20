echo "Before install"
cd /home/ubuntu/never-stray
git checkout main
git pull
echo "Docker clean"
docker container prune -f
docker image prune -f
docker network prune -f
docker volume prune -f