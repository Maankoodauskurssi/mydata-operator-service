#!/usr/bin/env bash
#/bin/bash -xe

IP=52.59.228.227
# ssh -i maankoodaus3.pem ec2-user@54.93.42.47  "kill $(ps aux | grep '[n]ode server' | awk '{print $2}')"

scp -i maankoodaus3.pem ./* ec2-user@${IP}:/opt/mkk/
scp -i maankoodaus3.pem ./service/* ec2-user@${IP}:/opt/mkk/service/

scp -r -i maankoodaus3.pem ./service/config ec2-user@${IP}:/opt/mkk/service/
scp -r -i maankoodaus3.pem ./service/data ec2-user@${IP}:/opt/mkk/service/
scp -r -i maankoodaus3.pem ./service/handlers ec2-user@${IP}:/opt/mkk/service/
scp -r -i maankoodaus3.pem ./service/models ec2-user@${IP}:/opt/mkk/service/

# ssh -i maankoodaus3.pem ec2-user@54.93.42.47  "cd /opt/mkk | node server.js &"
