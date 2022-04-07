echo "Before install"
cd /home/ubuntu/never-stray
git checkout main
git pull
git add *
git commit -a -m "local file server commit message"
git fetch origin master
git merge -s recursive -X theirs origin/main
echo "Docker clean"
docker container prune -f
docker image prune -f
docker network prune -f
docker volume prune -f