# Sistema IDS/IPS amb Suricata

Aquest repositori conté la implementació d'un sistema IDS/IPS utilitzant **Suricata** en un entorn de laboratori virtual.
L'objectiu es simular una xarxa real, detectar atacs, generar alertes i aplicar mecanismes de prevenció.

## 📌 Estructura del repositorii

```
├── README.md
├── demo.mp4
└── proces/
      ├── instalacio-suricata.md
      ├── regles-personalitzades.md
      ├── configuracio-ips.md
      ├── logs-alertes.md
      ├── simulacio-atacs.md
      └── resposta-incidents.md
└── configuracio/
      ├── fast.log
      ├── eve.log
      ├── suricata.yaml
      ├── test.rules
      └── enviar_alerta.py
```

## 📘 Descripció general

El projecte utilitza:

- **Suricata** com a IDS/IPS.
- **Ubuntu Server 22.04** com a màquina víctima.
- **Kali Linux** com a màquina atacant.
- Eines d’atac: `nmap`, `sqlmap`, `nc`.
- Regles personalitzades per detectar escanejos, força bruta, SQLmap i tràfic sospitós.
- Integració amb **NFQUEUE + iptables** per activar el mode IPS.
- Generació i anàlisi de logs (`fast.log`, `eve.json`).
- Script Python + `crontab` per extracció periòdica d’alertes.

## 🎯 Objectius del projecte

- Detectar tràfic maliciós real.
- Crear regles personalitzades.
- Configurar Suricata com IDS i com IPS.
- Analitzar alertes i logs generats.
- Simular atacs i validar la resposta del sistema.
- Establir un pla de resposta a incidents.

## 📂 Contingut

Els fitxers dins de `proces/` documenten cada fase del projecte:

- Instal·lació i configuració inicial de Suricata.
- Creació de regles personalitzades.
- Activació del mode IPS.
- Configuració de logs i alertes.
- Simulació d’atacs.
- Resposta a incidents.

Els fitxers dins de `configuracio/` inclouen:

- `suricata.yaml` — configuració utilitzada.
- `test.rules` — regles personalitzades creades.
- `fast.log` — exemple de logs generats.
- `eve.log` — exemple de logs generats.
- `enviar_alerta` — codi de Python per alertes.
