echo "Start never-stray docker"
cd /home/ubuntu/never-stray
docker-compose up -d frontend
docker-compose up -d backend
docker-compose up -d cron