
# Prova de memòria RAM

En aquesta prova s’ha validat el funcionament del trigger de memòria RAM configurat a Zabbix.

---

## Generació de càrrega

S’ha utilitzat l’eina `stress` per consumir memòria del sistema:

```bash
stress --vm 2 --vm-bytes 512M --timeout 60s
```

---

## Objectiu

Simular una situació de saturació de memòria per comprovar la resposta del sistema de monitorització.

---

## Resultat

- L’ús de RAM ha augmentat progressivament
- El trigger configurat (>90%) s’ha activat correctament
- S’ha generat alerta a Zabbix
- El dashboard reflecteix l’increment de consum

---

## Conclusió

El sistema detecta correctament increments de memòria i genera alertes automàtiques.
