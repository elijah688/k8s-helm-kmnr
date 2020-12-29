# K8S DEMO

## Client
A React SPA consuming a Node.js API.

#### **Multi-Stage Image**
* elijah/nginx:1.0.0 (Utility Image) - Used in the build stage of the cliet image.

* elijah668/client:1.0.0 (Available on DockerHub)


## API
A Node.js CRUD APPI.

#### **Image**
* elijah668/api:1.0.0 (Available on DockerHub)

## Setup

1. Connect to cluster by updating the `KUBECONFIG` environment path to point to point to the cluster's config `YAML` file by running.
```
export KUBECONFIG=/path/to/cluster/config.yaml
```

2.  Create a `configmap` for the api configuration environment variables by navigating to `/kubernetes/config` and running:
```
kubectl create configmap config --from-env-file=.conf 
```

2. Create a `secret` for the api mongoDB credentials by navigating to `/kubernetes/config` and running:
```
kubectl create secret generic secret  --from-env-file=.secret.conf 
```
3. Create an `api-service` by navigating to `/kubernetes` and running:
```
kubectl apply -f api-service.yaml
```
4. Create an `client-service` by navigating to `/kubernetes` and running:
```
kubectl apply -f client-service.yaml
```

5. Create an `api-deployment` by navigating to `/kubernetes` and running:
```
kubectl apply -f api-deployment.yaml
```

6. Create a `client-deployment` by navigating to `/kubernetes` and running:
```
kubectl apply -f client-deployment.yaml
```

7. To get client endpoint run:
```
kubectl describe service client-service
```
Example output:

```
Name:                     client-service
Namespace:                default
Labels:                   <none>
Annotations:              <none>
Selector:                 app=client
Type:                     LoadBalancer
IP:                       10.21.28.57
LoadBalancer Ingress:     a9c870f0e974d4c0b89f3cc7e371f8db-2043556432.us-west-2.elb.amazonaws.com
Port:                     <unset>  8000/TCP
TargetPort:               80/TCP
NodePort:                 <unset>  30835/TCP
Endpoints:                10.20.129.148:80
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>
```

The aplication should be live at: `http://${LoadBalancer Ingress}:${Port}`, or from the above example output: `http://a9c870f0e974d4c0b89f3cc7e371f8db-2043556432.us-west-2.elb.amazonaws.com:8000`