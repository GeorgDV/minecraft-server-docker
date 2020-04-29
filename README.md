## docker

```
sudo yum update -y
sudo yum install -y docker
sudo usermod -a -G docker ec2-user
sudo service docker start
sudo docker run --rm -e EULA=TRUE -p 25565:25565 --name mc itzg/minecraft-server
```
## docker compose

```
sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-`uname -s`-`uname -m` | sudo tee /usr/local/bin/docker-compose > /dev/null
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose --version
```
## git

```
sudo yum install -y git
```