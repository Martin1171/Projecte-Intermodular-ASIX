# ✔️ Regles personalitzades de Suricata

A més de les signatures que inclou Suricata per defecte, s’han creat regles personalitzades per detectar comportaments específics dins del laboratori.

## 🗂️ Afegir fitxer de regles al YAML

Al fitxer `suricata.yaml` s’ha afegit el fitxer `test.rules`:

```
default-rule-path: /etc/suricata/rules

rule-files:
  - test.rules
```

---

## 📄 Contingut corregit del fitxer `test.rules`

A continuació tens les regles **corregides**, amb sintaxi vàlida i caràcters arreglats:

```
# Possible força bruta PostgreSQL
alert tcp any any -> any 5432 (msg:"[ALERTA]: Possible força bruta a PostgreSQL"; flags:S; flow:not_established,to_server; threshold:type both, track by_src, count 5, seconds 60; sid:1000000; rev:1;)

# SQLmap detectat (User-Agent)
alert http any any -> any any (msg:"[ALERTA]: SQLmap detectat (User-Agent)"; content:"sqlmap"; nocase; http_user_agent; sid:1000004; rev:1;)

# Nmap scan detectat (SYN scan)
alert tcp any any -> any any (msg:"[ALERTA]: ET SCAN Nmap -sS detectat"; flags:S; threshold:type both, track by_dst, count 1, seconds 60; sid:1000005; rev:1;)

# Connexió sospitosa SSH
alert tcp any any -> any 22 (msg:"[ALERTA]: Connexió sospitosa cap al port SSH"; sid:1000001; rev:1;)

# Injecció SQL simple
alert http any any -> any any (msg:"[ALERTA]: Possible injecció SQL detectada"; content:"' OR 1=1 --"; nocase; sid:1000003; rev:1;)

# Possible SQLmap detectat (payload)
alert tcp any any -> any any (msg:"[ALERTA]: Possible SQLmap detectat"; content:"sqlmap"; nocase; sid:1000014; rev:1;)

# Connexió sospitosa HTTP port 80
drop tcp any any -> any 80 (msg:"[BLOQUEJAT]: Connexió sospitosa port 80"; sid:1000030; rev:1;)

# SQLmap bloquejat per User-Agent
drop http any any -> any any (msg:"[BLOQUEJAT]: SQLmap bloquejat"; content:"sqlmap"; nocase; http_user_agent; sid:1000010; rev:1;)

# Força bruta PostgreSQL (bloqueig)
drop tcp any any -> any 5432 (msg:"[BLOQUEJAT]: Força bruta PostgreSQL"; flags:S; flow:not_established,to_server; threshold:type both, track by_src, count 5, seconds 60; sid:1000020; rev:1;)
```

---

## 🔍 Què detecten aquestes regles?

- Escanejos **Nmap -sS**
- Connexions sospitoses a **SSH**
- Ús de **SQLmap** (User-Agent i contingut)
- Intent d’**injecció SQL simple**
- **Força bruta** contra PostgreSQL
- Trànsit sospitós al port **80**
- Bloqueig automàtic de trànsit maliciós
