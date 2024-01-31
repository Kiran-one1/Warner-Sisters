Step 1: Install Minikube
Make sure you have VirtualBox (or another supported hypervisor) and kubectl installed on your machine. Then, install Minikube using the following commands:

bash

# Install Minikube
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/

# Start Minikube with VirtualBox as the driver
minikube start --driver=virtualbox
Step 2: Install kubectl
If you haven't installed kubectl yet, you can do it using the following commands:

bash

# Install kubectl on Linux
sudo apt-get update && sudo apt-get install -y kubectl
Step 3: Configure kubectl to use Minikube cluster
Once Minikube is up and running, you need to configure kubectl to use the Minikube cluster. Run the following command:

bash

kubectl config use-context minikube
This sets the current context for kubectl to the Minikube cluster.

Step 4: Verify the setup
You can verify that everything is set up correctly by checking the status of the Minikube cluster and getting the cluster information:

bash

# Check Minikube status
minikube status

# Get cluster information
kubectl cluster-info
