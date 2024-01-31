Setting Up Monitoring with Prometheus and Grafana:
Deploy Prometheus:

Create a Prometheus configuration file (prometheus-config.yaml):

yaml

global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'hwapp'
    static_configs:
      - targets: ['hwapp-service.default.svc:8001']
Apply the configuration:

bash

kubectl create configmap prometheus-config --from-file=prometheus-config.yaml -n default
kubectl apply -f prometheus-deployment.yaml
Deploy Grafana:

bash

kubectl apply -f grafana-deployment.yaml
Access Grafana:

Get the Grafana pod name:

bash

kubectl get pods -l app=grafana -n default
Forward Grafana port to your local machine:

bash

kubectl port-forward <grafana-pod-name> 3000:3000 -n default
Open your browser and go to http://localhost:3000. Log in with the default credentials (admin/admin).

Configure Grafana for Prometheus:

Add Prometheus as a data source in Grafana (Configuration > Data Sources).
Set the URL to http://prometheus-service.default.svc:9090.
Save and Test.
