# 1. Selecció i Preparació de la Plataforma

## Introducció a les plataformes de virtualització

La virtualització permet executar múltiples sistemes operatius en un mateix servidor físic, optimitzant recursos i facilitant la gestió d'infraestructures IT.

## Taula comparativa de plataformes

| Plataforma | Llicència | Què virtualitza? | Avantatges | Inconvenients |
|------------|-----------|------------------|------------|---------------|
| VMware ESXi | Propietària (pagament) | Màquines Virtuals | Molt estable, molt utilitzat a empreses | Llicències cares |
| Proxmox VE | Codi Obert (gratuïta) | Màquines Virtuals i Contenidors | Flexible, interfície web, suport containers | Requereix coneixement Linux |
| Microsoft Hyper-V | Propietària (inclosa a Windows) | Màquines Virtuals | Integració amb Windows i AD | Menys flexible amb Linux |
| IsardVDI | Codi Obert (gratuïta) | Escriptoris Virtuals (VDI) | Ideal per escriptoris virtuals | Menys enfocada a servidors |

## Plataforma escollida: Microsoft Hyper-V

He escollit **Hyper-V** com a plataforma principal pels següents motius:

- **Coherència amb l'ecosistema Microsoft**: En ser part del sistema operatiu Windows Server 2025, facilita la instal·lació, gestió i compatibilitat amb serveis de Windows (DHCP, DNS, Active Directory, etc.).

- **Arquitectura de Micro-Kernel**: Ofereix un aïllament superior entre les màquines virtuals (VMs) i el maquinari, millorant la seguretat i l'estabilitat del sistema global.

- **Gestió de l'emmagatzematge i xarxa**: Facilita la configuració de clústers d'alta disponibilitat, l'ús de discs VHDX dinàmics i commutadors virtuals avançats.

- **Eines d'administració professionals**: Permet una gestió centralitzada mitjançant Hyper-V Manager, PowerShell per a automatització, o Windows Admin Center.

## Planificació del maquinari

| Component | Especificació | Per què? |
|-----------|---------------|----------|
| CPU | 6 cores | Permet assignar recursos a les VMs sense afectar el rendiment del host |
| RAM | 32 GB | Suficient per executar múltiples VMs de forma fluida |
| Disc | SSD | Millor rendiment per als discs virtuals |

## Serveis utilitzats

- **Hyper-V**: Plataforma de virtualització principal
- **Windows Defender**: Protecció contra malware i amenaces
- **Virtual Switch**: Comunicació de xarxa entre VMs
