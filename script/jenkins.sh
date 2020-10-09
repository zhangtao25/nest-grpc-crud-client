container_name='nest-grpc-crud-client'
image_name='nest-grpc-crud-client';
jenkins_workspace='/root/docker/jenkins/workspace/nest-grpc-crud-client';
image_version=`date +%Y%m%d%H%M`;
in_port='3000';
out_port='31012';

echo '------Start deployment------'
cd ${jenkins_workspace};
ls;
#sudo npm i;
#sudo npm run build;
chmod 777 -R ${jenkins_workspace};
echo ${image_version};

docker stop ${container_name};
docker rm ${container_name};
docker build -t ${image_name}:${image_version} .;

docker images;
docker run  -p ${out_port}:${in_port} -d --name ${container_name} ${container_name}:$image_version;

echo '------End deployment------'
