Applying the Configurations:
Apply the Deployment:

bash

kubectl apply -f kubernetes/deployment.yaml
Apply the Service:

bash

kubectl apply -f kubernetes/service.yaml
Apply the Ingress:

bash

kubectl apply -f kubernetes/ingress.yaml
Verify the deployment:

bash

kubectl get pods,svc,ingress
Ensure that the pods are running, and the service and ingress are created.

Access the application through Minikube's IP and Ingress hostname:

bash

minikube ip

Open your web browser and visit http://<Minikube-IP> or http://hwapp.local 
