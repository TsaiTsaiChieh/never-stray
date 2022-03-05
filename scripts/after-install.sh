echo "After install"
cd /home/ubuntu/never-stray
docker build --cache-from=frontend -m 500M -t 'frontend' ./frontend
docker build --cache-from=backend -m 500M -t 'backend' ./backend
docker build --cache-from=backend -m 500M -t 'cron' ./backend
docker build --cache-from=nginx -m 500M -t 'nginx' ./nginx
