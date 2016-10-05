#/bin/bash -xe

ssh -i maankoodaus3.pem ec2-user@54.93.42.47  "kill $(ps aux | grep '[n]ode server' | awk '{print $2}')"

scp -i maankoodaus3.pem ./service/* ec2-user@54.93.42.47:/opt/mkk/

scp -r -i maankoodaus3.pem ./service/config ec2-user@54.93.42.47:/opt/mkk/
scp -r -i maankoodaus3.pem ./service/data ec2-user@54.93.42.47:/opt/mkk/
scp -r -i maankoodaus3.pem ./service/handlers ec2-user@54.93.42.47:/opt/mkk/

ssh -i maankoodaus3.pem ec2-user@54.93.42.47  "cd /opt/mkk | node server.js &"
