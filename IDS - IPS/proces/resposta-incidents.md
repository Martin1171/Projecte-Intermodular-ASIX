# Resposta a Incidents

Aquesta fase consisteix a reaccionar manualment davant dels atacs detectats per Suricata, utilitzant la informació obtinguda dels logs (`fast.log` i `eve.json`).

## 📝 Identificació de la IP atacant

Quan es detecta un escaneig de ports amb `nmap -sS`, es consulta:

```
sudo tail -f /var/log/suricata/fast.log
```

Exemple del document:

```
[ALERTA]: Connexio sospitosa cap al port SSH
{TCP} 192.168.100.22 -> 192.168.100.21:22

[ALERTA]: ET SCAN Nmap -sS detectat
{TCP} 192.168.100.22 -> 192.168.100.21
```

Això permet identificar clarament la IP atacant: **192.168.100.22** (màquina Kali).

## 🔍 Verificació detallada amb eve.json

Per veure informació més completa:

```
cat /var/log/suricata/eve.json | grep "ET SCAN"
```

Exemple:

```
"src_ip": "192.168.100.22",
"dest_ip": "192.168.100.21",
"signature": "[ALERTA] : ET SCAN Nmap -sS detectat"
```

Això confirma:

- Tipus d’atac  
- Severitat  
- Regla que ha saltat  
- Ports implicats  

## 🛡️ Resposta manual

Un cop identificada la IP atacant, es pot aplicar una mesura manual, consisteix només en:

- Revisar alertes  
- Confirmar l’origen  
- Validar que Suricata ha detectat correctament l’activitat  

## ✔️ Validació final

Suricata detecta:

- Escanejos Nmap  
- Connexions sospitoses a SSH  
- Tràfic bloquejat al port 80  
- Activitat SQLmap  

I que els logs permeten una resposta ràpida i informada davant incidents.
