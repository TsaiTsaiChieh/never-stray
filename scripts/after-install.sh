echo "After install"
cd /home/ubuntu/never-stray
docker build --cache-from=frontend-t 'frontend' ./frontend
docker build --cache-from=backend -t 'backend' ./backend
docker build --cache-from=backend -t 'cron' ./backend
docker build --cache-from=nginx -t 'nginx' ./nginx
