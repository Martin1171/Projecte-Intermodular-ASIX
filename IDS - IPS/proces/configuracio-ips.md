# Configuració del Mode IPS amb Suricata

Per convertir Suricata de mode IDS (només detecció) a mode IPS (detecció + bloqueig), s’ha configurat la integració amb **NFQUEUE** i **iptables**.

## 🔗 Integració amb NFQUEUE

NFQUEUE permet que el tràfic passi pel motor d’inspecció de Suricata abans d’arribar al sistema.

Regla utilitzada:

```
sudo iptables -I INPUT -j NFQUEUE --queue-num 0
```

Això envia tot el tràfic d’entrada a la cua 0, que Suricata processarà.

## ⚙️ Configuració de Suricata en mode IPS

Al fitxer `suricata.yaml` s’ha configurat el bloc `af-packet` en mode inline:

```
af-packet:
  - interface: enp0s8
    cluster-id: 99
    cluster-type: cluster_flow
    defrag: yes
    use-mmap: yes
    tpacket-v3: yes
    ring-size: 200000
    mode: inline
    copy-mode: ips
```

Aquesta configuració permet:

- Inspecció del tràfic en temps real  
- Capacitat de bloqueig immediat  
- Funcionament multi-fil  
- Processament eficient de paquets

## ✔️ Validació de la configuració IPS

Per comprovar que la configuració és correcta:

```
suricata -T
```

Sortida del document:

```
Configuration provided was successfully loaded. Exiting.
```

Amb això, Suricata queda operant com a **IPS**, capaç de bloquejar tràfic maliciós segons les regles definides.
