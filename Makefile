up:
	docker-compose -f docker-compose.dev.yml --compatibility up --remove-orphans -d
down:
	docker-compose -f docker-compose.dev.yml down -v
build:
	docker build -f --cache-from=frontend -m 500M -t frontend ./frontend -f ./frontend/Dockerfile.dev
	docker build --cache-from=backend -m 500M -t backend ./backend
	docker build --cache-from=backend -m 500M -t cron ./backend