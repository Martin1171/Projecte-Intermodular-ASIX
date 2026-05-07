# Fase 3 – Seguretat

## 3.1 Objectiu de la fase  
Aplicar millores de seguretat a tota la plataforma, tant en Docker Swarm com en els microserveis.

---

## 3.2 Docker Secrets  
S’eliminen contrasenyes en text pla i es substitueixen per secrets gestionats per Swarm.

Exemples de secrets:

- Contrasenyes de MySQL
- Credencials de RabbitMQ

---

## 3.3 Segmentació de xarxes  
Cada servei només pot accedir al que necessita.

Beneficis:

- Reducció de superfície d’atac
- Millor control del tràfic intern
- Aïllament entre microserveis

---

## 3.4 HTTPS al frontend  
S’implementa:

- Certificat autosignat
- Nginx configurat amb TLS
- Redirecció automàtica HTTP → HTTPS

Això garanteix que totes les comunicacions amb el frontend siguin segures.

---

## 3.5 Escaneig de vulnerabilitats  
S’utilitza **Trivy** per analitzar imatges Docker i detectar:

- Vulnerabilitats del sistema
- Paquets insegurs
- Configuracions incorrectes