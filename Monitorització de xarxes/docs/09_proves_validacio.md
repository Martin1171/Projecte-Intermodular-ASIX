# 9. Proves i validació

En aquest apartat es comprova que tot el sistema de monitorització funciona correctament en un entorn controlat.

---

## 9.1 Prova de CPU

S’ha generat càrrega al sistema amb la següent comanda:

```bash
yes > /dev/null &
```

### Resultat:
- El consum de CPU ha augmentat correctament
- El trigger de CPU (>90%) s’ha activat
- S’ha generat una alerta a Zabbix (Problems)
- Al dashboard es veu clarament el pic de consum

---

## 9.2 Prova de memòria RAM

S’ha utilitzat l’eina `stress` per augmentar l’ús de memòria del sistema.

### Resultat:
- Increment del consum de RAM
- Activació del trigger de memòria (>90%)
- Aparició de l’alerta al dashboard

---

## 9.3 Prova de SWAP

S’ha forçat l’ús de memòria swap amb càrrega de memòria per saturar la RAM disponible.

### Resultat:
- Increment de l’ús de swap
- Activació del trigger configurat (<50% lliure)
- Alerta mostrada correctament a Zabbix

---

## Conclusió final

Les proves realitzades confirmen que:

- Els triggers funcionen correctament
- El sistema detecta càrrega en temps real
- Les alertes es generen automàticament
- El dashboard reflecteix els canvis del sistema

El sistema de monitorització amb Zabbix queda validat i operatiu.
