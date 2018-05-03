COMPOSE_FILE ?= 'docker-compose.yml'
COMPOSE_CMD = docker-compose -f $(COMPOSE_FILE)

COMPOSE_RUN = $(COMPOSE_CMD) run --rm

up:
		$(COMPOSE_CMD) up -d

build:
		$(COMPOSE_CMD) build

log-web:
		$(COMPOSE_CMD) logs web

run-web:
		$(COMPOSE_RUN) web

restart-web:
		$(COMPOSE_CMD) restart web

install-web:
		$(COMPOSE_CMD) run --rm web npm install
