#!/bin/sh

sudo yum update -y

# docker

sudo yum install -y docker
sudo usermod -a -G docker ec2-user
sudo service docker start

# docker-compose

sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-`uname -s`-`uname -m` | sudo tee /usr/local/bin/docker-compose > /dev/null
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo docker-compose --version

# git 

sudo yum install -y git

# install/run minecraft 

git clone https://github.com/eritikass/minecraft-server-docker.git
cd minecraft-server-docker
sudo docker-compose up -d