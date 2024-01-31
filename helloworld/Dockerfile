# Use an official Python runtime as a parent image
FROM python:3.8

# Set environment variables for Python (prevents Python from writing pyc files)
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port that Gunicorn will run on
EXPOSE 8001

# Command to run on container start
CMD ["gunicorn", "--bind", "0.0.0.0:8001", "helloworld.wsgi:application"]
