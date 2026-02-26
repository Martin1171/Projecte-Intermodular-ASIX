# Projecte ASIX2 - Curs 2025/2026
## M0379 Projecte intermodular d'administració de sistemes informàtics en xarxa
**Institut Sa Palomera · Blanes**

---

## Miniprojectes

| Núm. | Projecte                                         | Hores |
|------|-------------------------------------------------|-------|
| 01   | Docker i Orquestradors (Kubernetes Bàsic)      | 33    |
| 03   | Automatització de la Configuració (Ansible/PowerShell DSC) | 33    |
| 04   | IDS/IPS (Snort, Wazuh, Suricata)               | 33    |
| 05   | Monitorització de Xarxes (Zabbix, Cacti, Nagios) | 33    |
| 09   | Creació d'Entorn Virtual (ESXi, Proxmox, HyperV, IsardVDI) | 33/66 |

---

# Projecte 01: Docker i Orquestradors (Kubernetes Bàsic)

### Descripció
Projecte d'orquestració de contenidors Docker en un context de plataforma e-Commerce basada en microserveis.

### Cas d'Ús: ShopMicro
Plataforma e-Commerce de microserveis amb els següents components:

| Servei               | Tecnologia              | Funció                          |
|----------------------|------------------------|--------------------------------|
| frontend             | Nginx + HTML/JS estàtic | Interfície web de la botiga   |
| api-gateway          | Nginx (reverse proxy)  | Punt d'entrada únic            |
| product-service      | Python Flask / Node.js | CRUD de productes              |
| order-service        | Python Flask / Node.js | Gestió de comandes             |
| user-service         | Python Flask / Node.js | Registre i autenticació        |
| notification-service | Python Flask / Node.js | Notificacions                  |
| db-products          | MySQL 8.0              | BD de productes                |
| db-orders            | MySQL 8.0              | BD de comandes                 |
| cache                | Redis 7.x              | Cache de consultes             |
| message-queue        | RabbitMQ 3.x           | Cua de missatges               |

### Fases del Projecte

**Fase 1: Docker Compose — Entorn de Desenvolupament (4 hores)**
- Estudi de Docker Compose
- Diagrama de l'arquitectura
- Creació del fitxer `docker-compose.yml`
- Desplegament i verificació

**Fase 2: Docker Swarm — Clúster d'Alta Disponibilitat (12 hores)**
- Creació de clúster (1 manager + 2 workers)
- Adaptació a `docker-stack.yml` amb rèpliques
- Prova de tolerància a fallades
- Escalat en calent

**Fase 3: Seguretat a Docker Swarm (6 hores)**
- Anàlisi de vulnerabilitats
- Docker Secrets
- Aïllament de xarxes overlay

**Fase 4: Kubernetes — Migració (11 hores)**
- Comparativa Swarm vs Kubernetes
- Instal·lació Minikube/k3s
- Creació de Deployments, Services, ConfigMaps, Secrets
- Rolling updates

---

# Projecte 03: Automatització de la Configuració (Ansible/PowerShell DSC)

### Descripció
Muntatge i documentació d'un sistema d'automatització de la configuració amb Ansible o PowerShell DSC.

### Tecnologies

**Ansible**
- Sense agents
- Gestiona sistemes des d'una única plataforma
- Inventari, llibres d'estratègia i funcions

**PowerShell DSC**
- Característica de PowerShell 4.0+
- Scripts declaratius
- Manté configuracions coherents

### Fases del Projecte

**Fase 1: Introducció i elecció del sistema**
- Comprensió dels conceptes bàsics

**Fase 2: Selecció i Configuració del Sistema**
- Instal·lació Server i client
- Aprovisionament
- Gestió de la Configuració
- Desplegament d'aplicacions
- Definició Seguretat Sistema

---

# Projecte 04: IDS/IPS (Snort, Wazuh, Suricata)

### Descripció
Implementació d'un Sistema de Detecció i/o Prevenció d'Intrusions.

### Fases del Projecte

| Fase                                      | Hores | Tasques |
|------------------------------------------|-------|---------|
| Introducció als IDS/IPS                   | 2     | Conceptes bàsics de detecció i prevenció; Paper en la seguretat informàtica |
| Selecció de la Tecnologia                 | 3     | Comparació entre sistemes IDS/IPS; Anàlisi de requisits; Justificació de l'elecció |
| Instal·lació i Configuració Bàsica       | 8     | Instal·lació; Configuració inicial; Integració amb infraestructura |
| Definició de Polítiques de Seguretat     | 5     | Regles i signatures; Polítiques per zones de xarxa; Mecanismes de resposta |
| Anàlisi de Logs i Alertes                 | 5     | Configuració per a logs; Sistema d'alerta; Casos pràctics |
| Simulació d'Atacs i Resposta             | 5     | Simulació d'atacs; Pla de resposta a incidents |
| Configuració de Sistemes Complementaris  | 3     | Integració amb firewall i antivirus; Connexions segures (VPN) |
| Documentació i Presentació                | 2     | - |

---

# Projecte 05: Monitorització de Xarxes (Zabbix, Cacti, Nagios)

### Descripció
Implementació d'un Sistema de Monitorització de Xarxa.

### Fases del Projecte

| Fase                                      | Hores | Tasques |
|------------------------------------------|-------|---------|
| Introducció a la Monitorització           | 2     | Conceptes bàsics; Importància de la monitorització |
| Selecció i Justificació de l'Eina        | 3     | Comparació Nagios, Zabbix, Cacti; Anàlisi de requisits; Justificació |
| Instal·lació i Configuració Bàsica       | 8     | Instal·lació; Configuració inicial; Integració amb dispositius simulats |
| Disseny de Polítiques de Monitorització  | 5     | Paràmetres a monitoritzar; Llindars i alertes; Polítiques per tipus de dispositius |
| Personalització i Desenvolupament de Scripts | 5 | Personalització de la interfície; Scripts personalitzats; Integració de plugins |
| Implementació de Dashboard i Informes    | 5     | Creació de dashboards; Informes periòdics; Capacitats de generació d'informes |
| Proves i Validació                        | 3     | Proves en entorn controlat; Resolució de problemes; Validació de l'efectivitat |
| Documentació i Presentació                | 2     | - |

---

# Projecte 09: Creació d'Entorn Virtual (ESXi, Proxmox, HyperV, IsardVDI)

### Descripció
Creació d'un entorn virtual utilitzant ESXi, Proxmox, Hyper-V o IsardVDI.

### Fases del Projecte

**Fase 1: Selecció i Preparació de la Plataforma**
- Introducció i Elecció de la Plataforma
- Introducció a ESXi, Proxmox, Hyper-V, IsardVDI
- Justificació de l'elecció
- Taula comparativa entre plataformes
- Instal·lació i Configuració Inicial
  - Manual pas a pas amb captures
  - Explicació de decisions (recursos, versions, entorn)

**Fase 2: Creació de l'Entorn Virtual**
- Desplegament de la Màquina Virtual Base
- Creació de la primera MV amb captures i explicacions
- Configuració de Xarxa (adaptadors, topologies)
- Implementació d'Emmagatzematge (discs virtuals, emmagatzematge compartit)
- Configuració de Recursos (CPU, RAM, emmagatzematge)

**Fase 3: Integració i Optimització**
- Configuració Avançada i Clústers
- Màquines Virtuals d'Alta Disponibilitat
- Característiques de Rèplica
- Optimització del Rendiment (ajustos recursos, MV elàstica)
- Seguiment del Rendiment amb eines integrades
