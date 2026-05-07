# 8. Dashboard i informes

En aquest apartat s’ha configurat la visualització global del sistema i la generació d’informes automàtics a Zabbix.

---

## Dashboard

S’ha creat un dashboard anomenat:

```text
Monitorització client-zabbix
```

Aquest dashboard permet veure de forma ràpida l’estat general del sistema monitoritzat.

### Widgets afegits:

- CPU: mostra l’ús del processador en temps real
- Memòria RAM: mostra el consum de memòria del sistema
- Memòria SWAP: mostra l’ús de swap
- Problemes: mostra les alertes generades pels triggers

---

## Objectiu del dashboard

Centralitzar tota la informació important del sistema en una sola pantalla per facilitar la supervisió i detecció d’incidències.

---

## Informes periòdics

S’han configurat informes automàtics a Zabbix amb les següents característiques:

- Generació periòdica (setmanal)
- Basats en el dashboard creat
- Inclouen gràfiques i estat del sistema
- Enviament automàtic per correu electrònic

---

## Configuració de correu (Gmail)

S’ha afegit el següent correu a **Alerts → Media types**:

```text
martinviscaglia@gmail.com
```

Això permet rebre notificacions i informes automàtics del sistema.

---

## Prova d’enviament

S’ha utilitzat l’opció **Test** per verificar el funcionament de l’enviament d’informes.

El sistema ha generat correctament el report i l’ha enviat al correu configurat.

---

## Resultat

El dashboard funciona correctament i els informes automàtics s’envien sense errors, mostrant l’estat del sistema monitoritzat.
