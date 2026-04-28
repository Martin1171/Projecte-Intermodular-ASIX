# Projecte Intermodular ASIX
---
**Creadors**: ***Yassine** Elouakili El Mahdati, **Martin** Ignacio Viscaglia i **Shayan** Ali Kousar*

---


## 📌 Descripció
Projecte format per **5 mini-projectes**, cadascun treballant una tecnologia diferent de gestió de sistemes i xarxes.


---

## 🗂️ Index dels Projectes

| # | Projecte | Tecnologies |
|---|----------|-------------|
| 1 | **Kubernetes** | Docker, K8s, Minikube |
| 2 | **Ansible** | Automatització, SSH |
| 3 | **IDS/IPS** | Suricata, iptables |
| 4 | **Monitorització** | Zabbix |
| 5 | **Virtualització** | Hyper-V |

---

## 1️⃣ Kubernetes - Microserveis

**Objectiu:** Desplegar una plataforma de microserveis amb contenidors.

**Microserveis:** product-service, order-service, api-gateway, notification-service  
**Serveis base:** MySQL (x2), Redis, RabbitMQ

**Què hem fet?**
- Hem creat l'estructura completa de microserveis amb Flask
- Hem connectat els serveis amb bases de dades MySQL
- Hem implementat comunicació asíncrona amb RabbitMQ
- Hem desplegat l'entorn amb Docker Compose, Docker Swarm i Kubernetes

```bash
# Docker Compose (entorn desenvolupament)
docker-compose up -d

# Docker Swarm (entorn producció)
docker stack deploy -c stack.yml shopmicro
```

---

## 2️⃣ Ansible - Automatització de Configuració

**Objectiu:** Automatitzar la configuració de servidors sense necessitat d'agents.

**Infraestructura:** Servidor control (192.168.100.12) + Client gestionat (192.168.100.13)

**Què hem fet?**
- Hem configurat connexió SSH per clau pública
- Hem creat playbooks per aprovisionar el sistema
- Hem automatitzat configuracions de seguretat (firewall, SSH)
- Hem desplegat aplicacions web automàticament
- Hem utilitzat templates Jinja2 per configuracions dinàmiques

```bash
ansible-playbook aprovisionament.yml   # Instal·la Apache i crea usuaris
ansible-playbook seguretat.yml         # Configura firewall i SSH
ansible-playbook desplegament.yml      # Desplega web automàticament
```

---

## 3️⃣ IDS/IPS - Suricata

**Objectiu:** Detectar i prevenir intrusions a la xarxa.

**Infraestructura:** Servidor Suricata (192.168.100.21) + Kali Linux (màquina atacant)

**Què hem fet?**
- Hem instal·lat i configurat Suricata com a IDS/IPS
- Hem creat regles personalitzades (port scanning, SSH brute force, SQL injection)
- Hem configurat NFQUEUE + iptables per mode IPS (bloqueig actiu)
- Hem implementat VPN amb OpenVPN per connexions segures
- Hem simulat atacs des de Kali per validar el sistema

```bash
# Mode IPS - bloqueig actiu
iptables -I INPUT -j NFQUEUE --queue-num 0
systemctl start suricata
```

---

## 4️⃣ Monitorització - Zabbix

**Objectiu:** Supervisar l'estat i rendiment de servidors.

**Infraestructura:** Servidor Zabbix (192.168.100.31) + Client monitoritzat (192.168.100.32)

**Què hem fet?**
- Hem instal·lat Zabbix amb base de dades MySQL
- Hem configurat triggers per alertes automàtiques
- Hem creat scripts personalitzats (monitorització d'espai MySQL)
- Hem dissenyat dashboards per visualitzar dades
- Hem configurat informes periòdics per correu electrònic

| Paràmetre | Trigger | Severitat |
|-----------|---------|------------|
| CPU | > 90% | High |
| RAM | < 20% lliure | Average |
| Swap | < 50% lliure | Warning |

---

## 5️⃣ Virtualització - Hyper-V

**Objectiu:** Crear un entorn virtualitzat per desplegar màquines virtuals.

**Plataforma:** Windows Server 2025 amb Hyper-V  
**VM Base:** Windows 10 Pro (4GB RAM, 50GB VHDX)

**Què hem fet?**
- Hem instal·lat el rol Hyper-V a Windows Server
- Hem creat Virtual Switches (Extern per Internet, Intern per xarxa de laboratori)
- Hem desplegat una VM base amb Windows 10
- Hem afegit un segon disc virtual de dades (100GB)
- Hem configurat carpeta compartida en xarxa
- Hem exportat la VM per poder desplegar-la a qualsevol usuari

```powershell
# Exportar màquina virtual
Export-VM -Name BASE-WIN-10 -Path "C:\HyperV\Exports"
```

---


## 🛠️ Resum de Tecnologies

| Categoria | Tecnologies |
|-----------|-------------|
| **Contenidors** | Docker, Docker Compose, Docker Swarm, Kubernetes |
| **Automatització** | Ansible, Jinja2 |
| **Seguretat** | Suricata, iptables, OpenVPN |
| **Monitorització** | Zabbix, MySQL |
| **Virtualització** | Hyper-V, Windows Server 2025 |
| **Backend** | Python, Flask, Redis, RabbitMQ |
