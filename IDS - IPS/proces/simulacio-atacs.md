# Simulació d'Atacs i Validació del Sistema IDS/IPS

En aquesta fase es realitzen diferents atacs des de la màquina Kali Linux per comprovar si Suricata és capaç de detectar-los i, en mode IPS, bloquejar-los.

## 🛠️ Eines utilitzades

- `nmap` — escaneig de ports  
- `nc` (netcat) — connexions manuals  
- `sqlmap` — intents d’injecció SQL  
- `tcpdump` — verificació del tràfic a la interfície

---

## 🔍 1. Escaneig de ports amb Nmap

Comanda utilitzada des de Kali:

```
nmap -sS 192.168.100.21
```

Resultat:

- Port 22/tcp open (SSH)  
- Port 5432/tcp open (PostgreSQL)

### ✔️ Detecció a Suricata

Al fitxer `fast.log` apareix:

```
[ALERTA]: ET SCAN Nmap -sS detectat
{TCP} 192.168.100.22 -> 192.168.100.21
```

També es mostra la regla de bloqueig del port 80:

```
[wDrop] Connexio sospitosa port 80
```

---

## 🔍 2. Connexió sospitosa a SSH

Des de Kali:

```
nc -vz 192.168.100.21 22
```

Suricata detecta la connexió:

```
[ALERTA]: Connexio sospitosa cap al port SSH
{TCP} 192.168.100.22 -> 192.168.100.21:22
```

---

## 🔍 3. Intent d’injecció SQL amb SQLmap

Comanda utilitzada:

```
sqlmap -u "http://192.168.100.21/login2.php?id=1" --batch
```

Resultat:

- SQLmap no pot connectar (Connection refused)  
- Suricata bloqueja el tràfic sospitós al port 80

Exemple de `fast.log`:

```
[wDrop] Connexio sospitosa port 80
{TCP} 192.168.100.22 -> 192.168.100.21:80
```

---

## 🔍 4. Verificació del tràfic amb tcpdump

Per assegurar que el tràfic arriba a la interfície monitoritzada:

```
sudo tcpdump -i enp0s8
```

Exemples:

```
IP 192.168.100.22.44577 > 239.255.255.250.3702: UDP, length 607
IP6 fe80::a00:27ff:febb:b853 > ip6-allrouters: ICMP6 router solicitation
```

---

La simulació confirma que Suricata detecta correctament:

- Escanejos Nmap  
- Connexions sospitoses  
- Tràfic HTTP maliciós  
- SQLmap per User-Agent  
- Activitat anòmala al port 80  

I en mode IPS, bloqueja el tràfic segons les regles definides.
