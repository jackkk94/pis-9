# Проектирование информационных систем
## Задание 9. Кластеризация

## Docker установка
https://docs.docker.com/get-docker/

https://dker.ru/docs/ (рус)

## Docker-compose установка
https://docs.docker.com/compose/install/

## Node js установка
https://nodejs.org/en/download/

## Frontend установка

- Установите зависимости

`$ npm install`

## Docker настройка
- Запуск проекта

`$ docker-compose up`

- Приложение запустится по адресу localhost:3000

- Порядок настройки кластеризации:
- 1. ./docker-compose.yml -> services.app.image = 127.0.0.1:5000/node
- 2. ./docker-compose.yml -> services.app.deploy.mode = replicated
     ./docker-compose.yml -> services.app.deploy.replicas = 4
- 3. Выполнить инициализацию swarm: docker swarm init
- 4. Создать сервис на основе образа: docker service create --name registry --publish published=5000,target=5000 registry:2 
- 5. Выполнить добавление приложения в реестр: docker compose push
- 6. Выполнить деплой: docker stack deploy --compose-file docker-compose.yaml app

