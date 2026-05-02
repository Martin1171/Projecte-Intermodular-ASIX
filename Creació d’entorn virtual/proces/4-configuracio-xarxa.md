# 4. Configuració de Xarxa

## Disseny de la topologia de xarxa

He decidit treballar amb dues xarxes lògiques:

- **Xarxa externa**: per donar accés a Internet i a la LAN física
- **Xarxa interna de laboratori**: per a comunicació només entre màquines virtuals (entorn de proves aïllat)

### Objectiu

- Que BASE-WINDOWS-10 i altres VM puguin parlar entre elles
- Que tinguin accés a Internet quan calgui
- Que disposin d'una xarxa interna separada per proves

## Configuració IP de la VM BASE-WINDOWS-10

Assignem una IP estàtica dins del rang **192.168.100.42 - 192.168.100.50** per garantir una identificació clara i estable dins de la xarxa.

### Passos dins de Windows 10

1. Obrir **Centre de xarxes i recursos compartits**
2. **Canviar configuració del adaptador**
3. Propietats de l'adaptador → **Protocol IP versió 4 (TCP/IPv4)**
4. Configurar IP estàtica

## Connexió de futures màquines virtuales

Amb una altra VM (CLIENT-1) es comprova que es poden comunicar entre elles. Això permet tenir:

- **Xarxa real** per a actualitzacions i serveis
- **Xarxa interna** per a pràctiques controlades

## Verificació de connectivitat

```cmd
ipconfig
ping 192.168.100.42
```
