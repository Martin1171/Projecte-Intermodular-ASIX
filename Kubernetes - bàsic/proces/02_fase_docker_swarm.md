# Fase 2 – Docker Swarm (Alta disponibilitat)

## 2.1 Objectiu de la fase  
Migrar el projecte a un entorn distribuït amb alta disponibilitat i escalat utilitzant Docker Swarm.

---

## 2.2 Creació del clúster  
Es creen tres màquines virtuals:

| Node | Rol | IP |
|------|-----|----|
| Manager | Coordinació | 192.168.10.10 |
| Worker 1 | Execució | 192.168.10.11 |
| Worker 2 | Execució | 192.168.10.12 |

El node manager inicialitza el clúster i genera el token perquè els workers s’hi uneixin.

---

## 2.3 Desplegament amb Docker Stack  
S’utilitza:

```
docker stack deploy -c stack.yml shopmicro
```

A diferència de Docker Compose, Swarm:

- Reparteix serveis entre nodes
- Manté rèpliques actives
- Reassigna serveis si un node falla

---

## 2.4 Escalat de serveis  
Exemple:

```
docker service scale shopmicro_product-service=3
```

Swarm distribueix automàticament les rèpliques entre els nodes disponibles.

---

## 2.5 Tolerància a fallades  
Si un node cau:

- Swarm detecta la fallada
- Reassigna les rèpliques a altres nodes
- Manté el servei actiu sense interrupcions

---

## 2.6 Xarxes overlay  
Les xarxes overlay permeten que els serveis es comuniquin entre nodes diferents com si fossin locals.