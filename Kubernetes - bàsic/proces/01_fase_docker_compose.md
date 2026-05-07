# Fase 1 – Desenvolupament amb Docker Compose

## 1.1 Objectiu de la fase  
Crear l’entorn inicial de desenvolupament utilitzant Docker Compose, desplegant els serveis base i configurant la infraestructura mínima per començar a treballar amb microserveis.

---

## 1.2 Creació de l’estructura del projecte  
Es crea la carpeta principal `shopmicro/` i dins d’ella les carpetes de cada microservei:

- `frontend/`
- `api-gateway/`
- `product-service/`
- `order-service/`
- `user-service/`
- `notification-service/`
- `db/`
- `redis/`
- `rabbitmq/`

També es crea el fitxer principal:

- `docker-compose.yml`

---

## 1.3 Serveis base desplegats

### MySQL (productes)
Base de dades per emmagatzemar productes.

### MySQL (comandes)
Base de dades per guardar les comandes.

### Redis
Servei de cache per millorar el rendiment.

### RabbitMQ
Sistema de missatgeria per comunicar microserveis.

---

## 1.4 Validació del desplegament  
Ordres utilitzades:

```
docker compose up -d
docker compose ps
```

Es comprova que tots els contenidors estan funcionant correctament.

---

## 1.5 Xarxes Docker  
Es creen tres xarxes per separar funcionalitats:

- `frontend-net` → frontend i API Gateway  
- `backend-net` → microserveis  
- `db-net` → bases de dades  

Cada servei només es connecta a la xarxa que necessita.

---

## 1.6 product-service (creació i integració)

### 1.6.1 Fitxers creats  
- `app.py`
- `requirements.txt`
- `Dockerfile`

### 1.6.2 API bàsica  
Es crea una API amb Flask que retorna productes.

### 1.6.3 Connexió a MySQL  
S’afegeix la llibreria:

```
mysql-connector-python
```

Es crea la taula `products` i es connecta el servei a la base de dades real.

### 1.6.4 Inicialització automàtica  
Es crea:

```
sql/init.sql
```

Docker executa aquest script en iniciar MySQL.

### 1.6.5 Prova del servei  
Accedint a:

```
http://localhost:5000/products
```

Es comprova que retorna dades reals de MySQL.

---

## 1.7 API Gateway

### 1.7.1 Objectiu  
Crear un punt d’entrada únic per a tots els microserveis.

### 1.7.2 Funcionament  
El gateway rep peticions i les redirigeix al servei corresponent.

Exemple:

```
/products → product-service:5000/products
```

### 1.7.3 Prova  
Accedint a:

```
http://localhost:8000/products
```

El gateway retorna els productes del servei intern.

---

## 1.8 order-service (bàsic)

### 1.8.1 Funcionalitats  
- Crear comandes (`POST /orders`)
- Consultar comandes (`GET /orders`)

Inicialment les comandes es guarden en memòria.