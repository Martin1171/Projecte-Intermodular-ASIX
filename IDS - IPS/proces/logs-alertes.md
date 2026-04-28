# Logs i Alertes de Suricata

Suricata genera diferents tipus de logs que permeten analitzar el tràfic i detectar activitats sospitoses. Els fitxers principals es troben a:

```
/var/log/suricata/
```

## 📁 Configuració de generació de logs

Al fitxer `suricata.yaml` s’han activat els següents formats:

### ✔️ fast.log (alertes simples)

```
outputs:
  - fast:
      enabled: yes
      filename: fast.log
      append: yes
```

Aquest fitxer mostra alertes en format senzill, similar a Snort.

### ✔️ eve.json (alertes detallades en JSON)

```
- eve-log:
    filetype: regular
    enabled: yes
    filename: eve.json
    types:
      - alert
      - http:
          extended: yes
      - dns:
```

Aquest fitxer conté informació detallada sobre cada alerta, incloent:

- IP origen i destí  
- Ports  
- Protocol  
- Severitat  
- Regla que ha saltat  

## 📨 Sistema d’alerta automàtica

S’ha creat un script en Python per extreure periòdicament les alertes del fitxer `eve.json`:

### Script `enviar_alerta.py`

```
sudo cat /var/log/suricata/eve.json | jq 'select ( .alert != null) | .alert' > alerts.txt
```

### Crontab configurat

```
* * * * * /usr/bin/python3 /home/user/enviar_alerta.py
```

Això permet generar un fitxer `alerts.txt` amb totes les alertes detectades.

## 🔍 Exemple d’anàlisi de tràfic amb tcpdump

A més dels logs de Suricata, també s’ha utilitzat `tcpdump` per capturar tràfic:

```
sudo tcpdump -i enp0s8
```

Exemple del document:

```
IP6 fe80::a00:27ff:febb:b853 > ip6-allrouters: ICMP6 router solicitation
IP 192.168.100.22.44577 > 239.255.255.250.3702: UDP, length 607
```

Aquesta eina permet verificar que el tràfic arriba correctament a la interfície monitoritzada.
