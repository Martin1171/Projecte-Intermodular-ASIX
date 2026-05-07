# Fase 4 – Migració a Kubernetes (Minikube)

## 4.1 Objectiu de la fase  
Migrar tota la plataforma ShopMicro a Kubernetes utilitzant Minikube com a entorn local.

---

## 4.2 Entorn utilitzat  
- Minikube
- kubectl
- Ubuntu 22.04

---

## 4.3 Recursos creats

### Namespace  
```
shopmicro
```

### ConfigMaps  
Per guardar configuracions no sensibles (URLs, noms de serveis…).

### Secrets  
Per guardar contrasenyes i dades sensibles.

### Deployments  
Un per cada microservei:

- product-service
- order-service
- api-gateway
- notification-service
- frontend
- redis
- rabbitmq
- db-products
- db-orders

### Services  
- **ClusterIP** per serveis interns  
- **NodePort** per exposar frontend i API Gateway  

---

## 4.4 Funcionalitats de Kubernetes

### Rolling updates  
Actualitzacions sense aturar el servei.

### Escalat automàtic  
Kubernetes pot augmentar o reduir rèpliques segons la càrrega.

### Monitorització  
Amb:

```
kubectl get pods
kubectl logs
kubectl describe
```

---

## 4.5 Accés al sistema

Frontend:

```
http://192.168.49.2:30081
```

API Gateway:

```
http://192.168.10.10:30080
```
