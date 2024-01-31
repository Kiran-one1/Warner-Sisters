This project demonstrates the end-to-end process of developing, containerizing, deploying, and monitoring a Django web application using Minikube Kubernetes and Jenkins CI/CD. The project includes steps for creating a Django web application, containerizing it with Docker, deploying it on Minikube Kubernetes, setting up Jenkins for CI/CD, and implementing monitoring/logging solutions.

Project Structure

helloworld/
|-kubernetes
 | |-service.yaml
 | |-ingress.yaml
 | |-deployment.yaml
 |-helloworld
 | |-urls.py
 | |-settings.py
 | |-wsgi.py
 | |-__pycache__
 | | |-__init__.cpython-310.pyc
 | | |-urls.cpython-310.pyc
 | | |-wsgi.cpython-310.pyc
 | | |-settings.cpython-310.pyc
 | |-__init__.py
 | |-asgi.py
 |-manage.py
 |-Dockerfile
 |-logging
 | |-elasticsearch_deployment.yaml
 | |-kibana_deployment.yaml
 |-db.sqlite3
 |-hwapp
 | |-urls.py
 | |-views.py
 | |-tests.py
 | |-admin.py
 | |-models.py
 | |-__pycache__
 | | |-__init__.cpython-310.pyc
 | | |-urls.cpython-310.pyc
 | | |-views.cpython-310.pyc
 | |-__init__.py
 | |-migrations
 | | |-__init__.py
 | |-apps.py
 |-requirements.txt

db.sqlite3: SQLite database file (local development).
Dockerfile: Defines the containerization process for the Django web application.
helloworld: Project settings and configuration.
hwapp: Django application folder.
kubernetes: Kubernetes YAML files for deployment configuration.
logging: Elasticsearch and Kibana files for centralized logging.
manage.py: Django management script.
requirements.txt: Python dependencies for the Django application.

Setup
Step 1: Create Python Django Web Application
Navigate to the hwapp directory and follow the instructions in the README.md to set up and run the Django application locally.

Step 2: Containerize Python Django Web Application
Use the provided Dockerfile to build a Docker image for the Django application.
Refer to the containerization.md file in the documentation directory for detailed instructions.

Step 3: Set Up Minikube Kubernetes Cluster
Follow the steps outlined in the setup.md file in the documentation directory to provision a Minikube Kubernetes cluster and configure kubectl.

Step 4: Deploy Python Django Web Application on Minikube Kubernetes
Use the YAML files in the kubernetes directory to deploy the Django application on the Minikube Kubernetes cluster.
Refer to the kubernetes-deployment.md file in the documentation directory for detailed instructions.

Step 5: Implement Jenkins CI/CD Pipeline
Configure the Jenkins CI/CD pipeline using the Jenkinsfile provided.

Step 6: Monitoring and Logging
Follow the instructions in the monitoring-logging.md file in the documentation directory to set up Prometheus for monitoring and Grafana for visualization.
Step 7: Documentation
Explore the documentation directory for comprehensive documentation on each step of the process.
Step 8: Testing and Verification
Execute the automated tests in the tests directory to ensure the application's functionality.
Verify the entire CI/CD pipeline by making code changes and observing the automated builds and deployments.
Contributors
Kiran.K 
