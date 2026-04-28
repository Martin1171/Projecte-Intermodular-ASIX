
---

# 📌 Estructura del repositori

```
├── README.md
├── demo.mp4
├── playbooks/
│   ├── playbook_aprovisionament.yml
│   ├── playbook_seguretat.yml
│   ├── playbook_desplegament.yml
│   ├── playbook_configuracio.yml
│   ├── playbook_variables.yml
│   ├── playbook_loops.yml
│   └── playbook_handlers.yml
├── templates/
│   └── index.html.j2
├── inventory/
│   └── hosts
└── docs/
    ├── instalacio.md
    ├── configuracio.md
    ├── aprovisionament.md
    ├── seguretat.md
    ├── desplegament.md
    ├── configuracio_avancada.md
    └── conclusions.md
```

---

# 📘 Descripció general

El projecte simula un entorn real amb:

* 🖥️ **Servidor Ansible (control node)**
* 💻 **Client gestionat (node remot)**
* 🌐 Xarxa privada (192.168.100.0/24)

S’han automatitzat diferents processos clau:

* Aprovisionament de sistemes
* Configuració de seguretat
* Desplegament d’aplicacions web
* Gestió de configuració
* Automatització avançada amb Ansible

---

# 🎯 Objectius del projecte

* Automatitzar la configuració de sistemes Linux
* Gestionar múltiples màquines des d’un únic servidor
* Desplegar aplicacions web de forma automàtica
* Aplicar polítiques de seguretat
* Implementar configuració dinàmica amb templates
* Utilitzar funcionalitats avançades d’Ansible

---

# ⚙️ Tecnologies utilitzades

* 🐧 Ubuntu Server 24.04
* ⚙️ Ansible
* 🔐 SSH
* 🌐 Nginx
* 🧩 Jinja2 (templates)
* 📦 Git

---

# 🚀 Fases del projecte

## 🔹 1. Instal·lació i configuració inicial

* Creació de màquines virtuals
* Configuració de xarxa
* Instal·lació d’Ansible
* Connexió SSH entre servidor i client

---

## 🔹 2. Aprovisionament

* Creació d’usuaris i grups
* Instal·lació de paquets bàsics
* Configuració inicial del sistema

---

## 🔹 3. Seguretat

* Actualització del sistema
* Configuració de firewall (UFW)
* Desactivació d’autenticació per password
* Protecció del servei SSH

---

## 🔹 4. Desplegament d’aplicacions

* Instal·lació de servidor web (Nginx)
* Clonació d’una aplicació des de Git
* Configuració de permisos
* Publicació de la web

---

## 🔹 5. Gestió de configuració

* Modificació de fitxers del sistema
* Ús de templates (Jinja2)
* Configuració de serveis
* Creació de tasques programades (cron)

---

## 🔹 6. Funcionalitats avançades

* 🔁 Loops (instal·lació múltiple)
* 🔔 Handlers (accions condicionals)
* 📦 Variables externes
* ⚠️ Gestió d’errors (block/rescue)
* 🏷️ Execució per tags
* 🔍 Mode check (simulació)

---

# 🧠 Conceptes clau treballats

* Idempotència
* Automatització declarativa
* Infraestructura com a codi (IaC)
* Gestió centralitzada de sistemes
* Configuració dinàmica

---

# ⚠️ Problemes trobats

Durant el desenvolupament del projecte s’han detectat diversos problemes reals:

* Errors de connexió SSH
* Problemes de permisos amb sudo
* Errors en el servei Nginx
* Problemes de configuració del directori web

💡 Tots aquests problemes han estat resolts i documentats dins del projecte.

---

# 📊 Resultats obtinguts

* Automatització completa del sistema
* Reducció del temps de configuració
* Sistema reproduïble i escalable
* Desplegament funcional d’una aplicació web
* Entorn estable i segur

---

# 🔥 Exemple d’execució

```bash
ansible-playbook playbooks/playbook_desplegament.yml
```

---

# 🌐 Accés a l’aplicació

Un cop desplegat:

```
http://192.168.100.13
```

---

# 🧾 Conclusions

Aquest projecte demostra com **Ansible permet automatitzar processos complexos** de manera senzilla i eficient.

S’ha aconseguit crear un entorn complet capaç de:

* Configurar sistemes
* Aplicar seguretat
* Desplegar aplicacions
* Gestionar configuracions

Tot això de forma automatitzada i repetible.

---

# 👨‍💻 Autor

Projecte realitzat per Shayan Ali Kousar

---

# ⭐ Valoració final

Ansible és una eina potent, escalable i essencial en entorns DevOps i administració de sistemes, permetent reduir errors humans i millorar l’eficiència operativa.

---
