# ShopMicro – Plataforma de Microserveis amb Docker, Swarm i Kubernetes

Aquest projecte és una plataforma d’e-commerce simplificada construïda amb una arquitectura de **microserveis**, utilitzant:

- **Docker & Docker Compose** (fase inicial)
- **Docker Swarm** (alta disponibilitat i escalat)
- **Kubernetes (Minikube)** (gestió avançada i entorn real de producció)
- **RabbitMQ, Redis, MySQL**
- **Frontend amb Nginx + HTTPS**
- **API Gateway**
- **Escaneig de vulnerabilitats (Trivy)**

El projecte està dividit en dues carpetes principals:

```
/proces          → Explicació pas a pas (XXX.md)
/configuracio   → Fitxers YAML, Dockerfile, configs, etc.
```

Aquest README és una **visió global** del projecte.

---

# 1. Objectiu del projecte

L’objectiu és construir una aplicació realista basada en microserveis, aprenent:

- Contenidors i orquestració
- Comunicació entre serveis
- Bases de dades distribuïdes
- Sistemes de missatgeria
- Escalat automàtic
- Alta disponibilitat
- Seguretat en entorns distribuïts
- Migració de Swarm → Kubernetes

---

# 2. Arquitectura general

Els microserveis principals són:

| Servei | Funció |
|--------|--------|
| **product-service** | Gestiona productes (MySQL) |
| **order-service** | Gestiona comandes i envia missatges a RabbitMQ |
| **notification-service** | Rep missatges de RabbitMQ |
| **api-gateway** | Punt d’entrada únic per al frontend |
| **frontend** | Interfície web (Nginx + HTTPS) |
| **db-products / db-orders** | Bases de dades MySQL |
| **redis** | Cache |
| **rabbitmq** | Sistema de missatgeria |

---

# 3. Fase 1 – Desenvolupament amb Docker Compose

En aquesta fase es crea tota l’estructura del projecte:

- Carpetes per a cada microservei
- Fitxer `docker-compose.yml`
- Xarxes Docker (`frontend-net`, `backend-net`, `db-net`)
- Bases de dades inicials amb scripts SQL
- Product-service connectat a MySQL
- API Gateway amb Flask
- Frontend bàsic amb HTML + JS

A `proces/` trobaràs tots els passos detallats.

---

# 4. Fase 2 – Docker Swarm (Alta disponibilitat)

S’han creat **tres màquines virtuals**:

| Node | Rol | IP |
|------|-----|----|
| Manager | Coordinació | 192.168.10.10 |
| Worker 1 | Execució | 192.168.10.11 |
| Worker 2 | Execució | 192.168.10.12 |

Funcionalitats implementades:

- Creació del clúster Swarm
- Desplegament amb `stack.yml`
- Escalat de serveis (`docker service scale`)
- Simulació de fallada d’un node
- Reassignació automàtica de rèpliques
- Xarxes overlay
- Docker Secrets
- HTTPS al frontend amb Nginx

---

# 5. Fase 3 – Seguretat

Millores aplicades:

### ✔ Docker Secrets  
Per evitar contrasenyes en text pla.

### ✔ Segmentació de xarxes  
- `frontend_net`
- `backend_net`
- `db_net`

### ✔ HTTPS al frontend  
- Certificat autosignat
- Redirecció HTTP → HTTPS
- Nginx configurat amb TLS

### ✔ Escaneig de vulnerabilitats (Trivy)  
S’han analitzat totes les imatges Docker.

---

# 6. Fase 4 – Migració a Kubernetes (Minikube)

S’ha migrat tota la plataforma a Kubernetes:

### Recursos creats:
- **Namespace:** `shopmicro`
- **ConfigMaps** (URLs dels serveis)
- **Secrets** (contrasenyes)
- **Deployments** (un per microservei)
- **Services**:
  - `ClusterIP` per serveis interns
  - `NodePort` per frontend i API Gateway

### Funcionalitats:
- Rolling updates
- Comunicació interna entre pods
- Exposició del frontend via NodePort
- Logs i monitorització amb `kubectl`

---

# 7. Accés al sistema (Kubernetes)

Frontend:
```
http://192.168.49.2:30081
```

API Gateway:
```
http://192.168.10.10:30080
```

---

# 8. Estructura del repositori

```
/
├── proces/
│   ├── 001_inici.md
│   ├── 002_docker_compose.md
│   ├── 003_swarm.md
│   ├── 004_seguretat.md
│   ├── 005_kubernetes.md
│   └── ...
│
├── configuracio/
│   ├── docker-compose.yml
│   ├── stack.yml
│   ├── k8s/
│   │   ├── api-gateway-deployment.yaml
│   │   ├── product-service-deployment.yaml
│   │   ├── order-service-deployment.yaml
│   │   ├── frontend-deployment.yaml
│   │   ├── configmap.yaml
│   │   ├── secrets.yaml
│   │   └── ...
│   └── ...
│
└── README.md
```
