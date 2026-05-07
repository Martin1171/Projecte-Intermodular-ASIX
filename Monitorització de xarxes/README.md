# Monitorització de Xarxes amb Zabbix

## Introducció

La monitorització de xarxa és essencial per controlar l’estat dels servidors i dispositius d’una infraestructura. Permet detectar errors, problemes de rendiment i generar alertes abans que afectin els usuaris.

En aquest projecte hem utilitzat **Zabbix** com a eina principal de monitorització.

---

# Selecció de l’Eina

Abans de començar, vam comparar diferents eines:

- **Nagios** → molt potent però més complex de configurar.
- **Cacti** → molt útil per gràfiques però limitat en alertes.
- **Zabbix** → eina completa, moderna i fàcil d’utilitzar.

Finalment es va escollir **Zabbix** perquè integra:

- Monitorització en temps real
- Gràfiques
- Triggers i alertes
- Dashboard
- Informes automàtics

---

# Planificació del Sistema

## Servidor Zabbix

| Configuració | Valor |
|---|---|
| Sistema Operatiu | Ubuntu 22.04 |
| Hostname | server-zabbix |
| IP | 192.168.100.31 |

## Client Monitoritzat

| Configuració | Valor |
|---|---|
| Sistema Operatiu | Ubuntu 22.04 |
| Hostname | client-zabbix |
| IP | 192.168.100.32 |

---

# Serveis Utilitzats

- Zabbix Server
- Zabbix Agent
- MySQL
- Apache2
- PHP

---

# Instal·lació i Configuració

## Servidor

Es va instal·lar Zabbix Server, Apache, PHP i MySQL al servidor Ubuntu.

També es va crear la base de dades `zabbix` i un usuari amb permisos.

## Client

Al client es va instal·lar el servei `zabbix-agent` i es va configurar perquè enviés dades al servidor Zabbix.

---

# Afegir Host a Zabbix

Es va crear el host `client-zabbix` amb:

- IP: `192.168.100.32`
- Port Agent: `10050`
- Template: `Linux by Zabbix agent`

Això permet monitoritzar:

- CPU
- RAM
- Disc
- Xarxa
- Sistema

---

# Monitorització

## Latest Data

Permet visualitzar dades en temps real del host:

- CPU
- RAM
- Disc
- Xarxa
- Sistema

## Graphs

Mostra gràfiques de rendiment:

- Ús CPU
- Consum RAM
- Swap
- Xarxa

## Problems

Mostra alertes i incidències detectades pels triggers.

## Dashboard

S’ha creat un dashboard personalitzat amb:

- Widget CPU
- Widget RAM
- Widget SWAP
- Widget Problems

---

# Triggers i Alertes

## Triggers configurats

| Trigger | Condició |
|---|---|
| CPU | > 90% |
| RAM | > 90% |
| SWAP | < 50% lliure |
| Xarxa IN Errors | > 0 |
| Xarxa OUT Errors | > 0 |
| Uptime | > 30 dies |

---

# Scripts Personalitzats

## Comptador de Processos

```bash
UserParameter=custom.process.count,ps aux | wc -l
```

Aquest script retorna el nombre de processos del sistema.

## Script MySQL

Es va crear un script per monitoritzar l’espai ocupat del directori `/var/lib/mysql`.

També es va crear un trigger que alerta quan supera el 80%.

---

# Dashboard i Informes

## Dashboard

Es va crear el dashboard:

```text
Monitorització client-zabbix
```

Inclou:

- CPU
- RAM
- SWAP
- Problemes

## Informes

Es van configurar informes periòdics setmanals enviats automàticament per correu electrònic.

També es va configurar Gmail com a Media Type per rebre notificacions.

---

# Proves i Validació

## CPU

Es va generar càrrega amb:

```bash
yes > /dev/null &
```

El trigger de CPU es va activar correctament i va aparèixer al dashboard.

## RAM

Es va utilitzar `stress` per incrementar el consum de memòria RAM.

Zabbix va detectar l’augment i va activar el trigger.

## SWAP

Es va forçar l’ús de memòria swap incrementant el consum de RAM.

El trigger de SWAP es va activar correctament.

---

# Resultats Finals

S’ha implementat correctament un sistema de monitorització amb Zabbix capaç de:

- Monitoritzar hosts Linux
- Generar gràfiques
- Detectar problemes
- Crear triggers
- Enviar informes per correu
- Visualitzar dashboards en temps real

El sistema ha funcionat correctament durant totes les proves realitzades.
