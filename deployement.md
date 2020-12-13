# Deployment steps

```
cd food-service
docker build -t food-service:0.0 .
gcloud services enable containerregistry.go
gcloud services enable containerregistry.googleapis.com
docker tag food-service:0.0 asia.gcr.io/eminent-hall-296708:latest
docker push asia.gcr.io/eminent-hall-296708/food-service:latest
```
Follow the same steps in the loginreg directory
 

### External ip's :
``` 34.70.77.194:80 
34.70.77.194:81 ```

The external ip's arent actually working as of now. COuld not fix the error
But the apllication works locally on the localhost.
