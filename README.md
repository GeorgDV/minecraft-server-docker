# minecraft-server-docker

 * Git clone this repo
 * Install packages ( check [install-soft.sh](./install-soft.sh) )
 * Run server `sudo docker-compose up`

## 

 * Create Security Group for minecraft
    - allows incoming tcp "25565"
 * Create new EC2 machine using AWS LINUX ( `Amazon Linux AMI 2018.03.0 (HVM), SSD Volume Type` )
    - use [bootstrap-script.sh](./bootstrap-script.sh)
    - use minecraft security group
 * Once EC2 is created/stared - connect using public ip


NodeJS AWS SDK Create EC2 example -> https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ec2-example-creating-an-instance.html


### docker

```
sudo yum update -y
sudo yum install -y docker
sudo usermod -a -G docker ec2-user
sudo service docker start
sudo docker run --rm -e EULA=TRUE -p 25565:25565 --name mc itzg/minecraft-server
```
### docker compose

```
sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-`uname -s`-`uname -m` | sudo tee /usr/local/bin/docker-compose > /dev/null
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose --version
```
### git

```
sudo yum install -y git
```

### after clone run 
```
sudo docker-compose up
```