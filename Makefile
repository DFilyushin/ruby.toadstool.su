up-test:
	docker-compose -f docker-compose.yml up --build

up-prod:
	docker-compose -f docker-compose.yml up --detach --build
