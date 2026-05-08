# Entorn Virtual amb Microsoft Hyper-V

Aquest repositori conté la implementació d'un entorn virtual funcional utilitzant **Microsoft Hyper-V** sobre Windows Server 2025. L'objectiu és simular una infraestructura corporativa controlada per a proves i aprenentatge.

## 📌 Estructura del repositori

```
├── README.md
├── demo.mp4
└── proces/
      ├── 1-seleccio-plataforma.md
      ├── 2-instal·lacio-configuracio.md
      ├── 3-desplegament-vm-base.md
      ├── 4-configuracio-xarxa.md
      ├── 5-emmagatzematge.md
      └── 6-configuracio-recursos.md
└── captures/
      ├── instal·lacio/
      │    ├── 01-afegir-rol-hyperv.png
      │    ├── 02-seleccionar-hyperv.png
      │    └── 03-reiniciar-servidor.png
      ├── virtual-switch/
      │    ├── 01-crear-switch-extern.png
      │    └── 02-switch-creat.png
      ├── vm-base/
      │    ├── 01-assistent-nova-vm.png
      │    ├── 02-configurar-ram.png
      │    ├── 03-configurar-xarxa.png
      │    ├── 04-crear-disc-vhdx.png
      │    └── 05-vm-engegada.png
      ├── emmagatzematge/
      │    ├── 01-afegir-disc-dades.png
      │    ├── 02-inicialitzar-disc.png
      │    └── 03-disc-llest.png
      └── recursos/
           ├── 01-configurar-cpu.png
           └── 02-configurar-ram-dinamica.png
```

## 📘 Descripció general

El projecte utilitza:

- **Microsoft Hyper-V** com a plataforma de virtualització.
- **Windows Server 2025** com a sistema operatiu host.
- **Windows 10 Pro** com a màquina virtual base.
- **Virtual Switch extern** per a connexió a Internet i LAN física.
- **Discos VHDX dinàmics** per optimitzar l'espai d'emmagatzematge.
- **Memòria dinàmica** per ajustar la RAM segons les necessitats.

## 🎯 Objectius del projecte

- Seleccionar i justificar la plataforma de virtualització escollida.
- Instal·lar i configurar Hyper-V correctament.
- Crear una màquina virtual base funcional.
- Configurar la xarxa per permetre comunicacions controlades.
- Implementar l'emmagatzematge amb discs virtuals.
- Assignar recursos (CPU, RAM) de manera eficient.

## 📂 Contingut

Els fitxers dins de `proces/` documenten cada fase del projecte amb **captures de pantalla**:

- **1-seleccio-plataforma.md** — Introducció, taula comparativa i elecció raonada d'Hyper-V.
- **2-instal·lacio-configuracio.md** — Instal·lació pas a pas d'Hyper-V amb captures.
- **3-desplegament-vm-base.md** — Creació de la màquina virtual BASE-WIN-10.
- **4-configuracio-xarxa.md** — Configuració de Virtual Switches i topologia de xarxa.
- **5-emmagatzematge.md** — Creació de discs VHDX i disc de dades.
- **6-configuracio-recursos.md** — Assignació de CPU i RAM a les VMs.

## 📹 Demo
[Veure video](https://drive.google.com/file/d/10SZqgWAS_Lf7QodMgnJFHOfuFmG7CttT/view?usp=sharing)

Les **captures de pantalla** es troben dins de la carpeta `captures/` organitzades per subcarpetes segons cada fase del projecte.
