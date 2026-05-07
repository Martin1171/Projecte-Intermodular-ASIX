
# Prova de memòria SWAP

En aquesta prova s’ha validat el funcionament del trigger de memòria SWAP configurat a Zabbix.

---

## Generació de càrrega

S’ha utilitzat l’eina `stress` per forçar l’ús de memòria i provocar ús de swap:

```bash
stress --vm 2 --vm-bytes 900M --timeout 60s
```

---

## Objectiu

Forçar la utilització de memòria swap per comprovar la detecció de baixos recursos de RAM.

---

## Resultat

- La memòria RAM s’ha saturat parcialment
- El sistema ha començat a utilitzar SWAP
- El trigger configurat s’ha activat correctament
- S’ha generat alerta a Zabbix

---

## Conclusió

La monitorització de SWAP funciona correctament i permet detectar problemes de memòria abans que el sistema falli.
