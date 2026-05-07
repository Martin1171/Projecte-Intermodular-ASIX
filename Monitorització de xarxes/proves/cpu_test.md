# Prova de CPU

En aquesta prova s’ha validat el funcionament del trigger de CPU configurat a Zabbix.

---

## Generació de càrrega

S’ha executat la següent comanda per generar càrrega al sistema:

```bash
yes > /dev/null &
```

Aquest procés s’executa en segon pla i consumeix recursos de CPU de manera contínua.

---

## Objectiu

Forçar l’augment de l’ús de CPU per comprovar que el sistema detecta correctament situacions de sobrecàrrega.

---

## Resultat

- El consum de CPU ha augmentat significativament
- El trigger configurat (>90%) s’ha activat correctament
- S’ha generat una alerta a Zabbix (Problems)
- Al dashboard es pot veure el pic d’activitat

---

## Conclusió

La monitorització de CPU funciona correctament i detecta càrregues en temps real.
