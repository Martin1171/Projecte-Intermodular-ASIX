# Instal·lació i Configuració Inicial de Suricata

Aquesta fase consisteix en instal·lar Suricata al servidor Ubuntu i preparar-lo per analitzar el tràfic de xarxa.

## 🖥️ Entorn utilitzat

- **Ubuntu Server 22.04**  
- Hostname: `serversuricata`  
- IP estàtica: `192.168.56.21`  
- Interfície monitoritzada: `enp0s8`

## 📌 Instal·lació de Suricata

Es pot instal·lar Suricata amb:

```
sudo apt update && sudo apt upgrade -y
sudo apt install suricata -y
```

Després de la instal·lació, es pot verificar la versió amb:

```
suricata -V
```

Exemple del document:

```
This is Suricata version 6.0.4 RELEASE
```

## 📡 Configuració de la interfície de captura

Al fitxer `suricata.yaml` s’ha configurat Suricata perquè analitzi el tràfic que arriba per la interfície `enp0s8`:

```
af-packet:
  - interface: enp0s8
```

## ▶️ Execució del servei

Per comprovar que Suricata està funcionant:

```
systemctl status suricata
```

Sortida mostrada al document:

- Servei actiu i en execució  
- Fitxer de configuració carregat correctament  
- Procés principal: `Suricata`  
- Memòria utilitzada: ~45 MB  

## ✔️ Validació de la configuració

Per validar la configuració abans d’engegar el servei:

```
suricata -T
```

Sortida del document:

```
Configuration provided was successfully loaded. Exiting.
```

Suricata queda així preparat per començar a analitzar tràfic i generar alertes.
