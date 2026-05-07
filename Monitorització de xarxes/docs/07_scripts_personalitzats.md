
# 7. Scripts personalitzats

En aquest apartat s’han creat scripts per ampliar les capacitats de monitorització de Zabbix i obtenir dades que no venen per defecte.

---

## Comptador de processos

S’ha afegit un *UserParameter* al fitxer de configuració de l’agent Zabbix:

```bash
UserParameter=custom.process.count,ps aux | wc -l
```

Aquest script retorna el nombre total de processos actius del sistema.

### Objectiu
Permet monitoritzar la càrrega del sistema de manera contínua i automàtica.

---

## Script de monitorització d’espai MySQL

S’ha creat un script extern per comprovar l’espai ocupat del directori:

```bash
/var/lib/mysql
```

Aquest script calcula el percentatge d’ús del directori i el retorna com a valor numèric per a Zabbix.

S’ha col·locat a la ruta:

```bash
/usr/lib/zabbix/externalscripts/check_mysql_dir.sh
```

També s’han assignat permisos d’execució:

```bash
chmod +x check_mysql_dir.sh
```

---

## Integració a Zabbix

L’script s’ha afegit com a *item* dins del host `server-zabbix` perquè s’executi periòdicament.

A més, s’ha creat un trigger:

- Si l’ús del directori supera el **80%**, es genera una alerta.

---

## Resultat

Els scripts personalitzats permeten ampliar les funcionalitats de Zabbix i adaptar-lo a necessitats específiques del sistema, millorant la capacitat de monitorització.
