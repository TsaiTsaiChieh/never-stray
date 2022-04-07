echo "Before install"
cd /home/ubuntu/never-stray
git checkout main
git fetch --all
git reset --hard origin/main
echo "Docker clean"
docker container prune -f
docker image prune -f
docker network prune -f
docker volume prune -f