# Client

A React SPA consuming a Node.js API.

#### **Multi-Stage Image**

- `elijah/nginx:1.0.0` (Utility Image) - Used in the build stage of the cliet image.

- `elijah668/client:1.0.0` (Available on DockerHub)

# API

A Node.js CRUD APPI.

#### **Image**

- `elijah668/api:1.0.0` (Available on DockerHub)

# Connect to Kubernetes Cluester

Connect to cluster by updating the `KUBECONFIG` environment path to point to point to the cluster's config `YAML` file by running:

```console
export KUBECONFIG=/path/to/cluster/config.yaml
```

# Setup

We begin by creating a `/kubernetes` directory and a `/kubernetes/config` sub directory.

**NOTE:** Please contact the CODEOWNERS of this repository to get the appropriate `config` files.

**NOTE:** All `YAML` deployment artefacts we'll be creating in this lab can be found in the `/kubernetes` directory.

# Configmap

Create a `configmap` for the API's configuration environment variables by navigating to `/kubernetes/config` and running:

```console
kubectl create configmap config --from-env-file=.conf
```

# Secret

Create a `secret` for the API's mongoDB credentials by navigating to `/kubernetes/config` and running:

```console
kubectl create secret generic secret  --from-env-file=.secret.conf
```

# API Service

Create an `api-service.yaml` definition by navigating to `/kubernetes` and running:

```console
kubectl create service loadbalancer api-service --tcp=5000:8000 -o yaml --dry-run=client > api-service.yaml
```

To deploy our `api-service.yaml` definition, we run:

```console
kubectl apply -f api-service.yaml
```

# Client Service

Create an `client-service.yaml` definition by navigating to `/kubernetes` and running:

```console
kubectl create service loadbalancer client-service --tcp=80:80 -o yaml --dry-run=client > client-service.yaml
```

To deploy our new `api-service.yaml` definition, we run:

```console
kubectl apply -f client-service.yaml
```

# API Deployment

Create an `api-deployment.yaml` definition by navigating to `/kubernetes` and running:

```console
kubectl create deployment api-deployment --image=elijah668/api:1.0.0 -o yaml --dry-run=client > api-deployment.yaml
```

We'll need to add our secret and configmap to the `api-deployment.yaml` file, as follows.

```yaml
containers:
  - image: ...
    name: ...
    env:
      - name: MONGO_USER
        valueFrom:
          secretKeyRef:
            name: secret
            key: MONGO_USER
      - name: API_PORT
        valueFrom:
          configMapKeyRef:
            name: config
            key: API_PORT
      - name: MONGO_PASSWORD
        valueFrom:
          secretKeyRef:
            name: secret
            key: MONGO_PASSWORD
      - name: MONGO_DB_NAME
        valueFrom:
          secretKeyRef:
            name: secret
            key: MONGO_DB_NAME
```

Do deploy the pods in our `api-deployment.yaml` definition, we simly run:

```console
kubectl apply -f api-deployment.yaml
```

# Client Deployment

To create a `client-deployment.yaml` definition, we navigate to `/kubernetes` and run:

```console
kubectl create deployment client-deployment --image=elijah668/client:1.0.0 -o yaml --dry-run=client > client-deployment.yaml
```

We'll need to add our configmap to the `client-deployment.yaml`, as follows:

```yaml
containers:
  - image: ...
    name: ...
    env:
      - name: THEME
        valueFrom:
          configMapKeyRef:
            name: config
            key: THEME
```

To deploy the pods in our `client-deployment.yaml` definition, we run:

```
kubectl apply -f client-deployment.yaml
```

# Access App on Kubernetes Cluster

To get the exposed `client` loadbalancer endpoint on the cluster, we run:

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

We can exect our application to be live at: `http://${LoadBalancer Ingress}:${Port}`, or from the above example output: `http://a9c870f0e974d4c0b89f3cc7e371f8db-2043556432.us-west-2.elb.amazonaws.com:8000`

# Clean Up

Once we've verified that our app is up and runnig we can clean up by running:

```console
kubectl delete deployment --all
kubectl delete service --all
kubectl delete secret --all
kubectl delete configmap --all
```
