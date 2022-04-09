up:
	docker-compose -f docker-compose.dev.yml --compatibility up --remove-orphans -d
down:
	docker-compose -f docker-compose.dev.yml down -v
build:
	docker build -f --cache-from=frontend -t frontend ./frontend -f ./frontend/Dockerfile.dev
	docker build --cache-from=backend -t backend ./backend
	docker build --cache-from=backend -t cron ./backend