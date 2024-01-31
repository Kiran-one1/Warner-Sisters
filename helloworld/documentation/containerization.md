Build and test the Docker image:
Navigate to the helloworld folder and run the below commands:

docker build -t hwapp .
docker run -p 8001:8001 hwapp
