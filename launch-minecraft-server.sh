#!/bin/sh

SECURITY_GROUP_IDS="sg-0e9fa95aa92415afd"
SUBNET_ID="subnet-2de1fb03"

aws ec2 run-instances \
 --image-id=ami-0915e09cc7ceee3ab \
 --count=1 --instance-type=t2.medium \
 --key-name=quarantine-key-pair \
 --security-group-ids=$SECURITY_GROUP_IDS \
 --subnet-id=$SUBNET_ID \
 --user-data=file://bootstrap-script.sh \
 --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=minecraft-server}]' \
 --query='Instances[*].{InstanceId:InstanceId,IP:PrivateIpAddress}' --output table