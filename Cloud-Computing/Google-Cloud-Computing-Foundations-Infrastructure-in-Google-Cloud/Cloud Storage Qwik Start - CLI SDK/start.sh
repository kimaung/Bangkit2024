#!/bin/bash

#----------------------------------------------------start--------------------------------------------------#

echo "Starting Execution"

# Set region for Google Cloud
gcloud config set compute/region $REGION

# Create a Cloud Storage bucket
gsutil mb gs://$DEVSHELL_PROJECT_ID

# Download image from the internet
curl https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg --output ada.jpg

# Upload image to Cloud Storage
gsutil cp ada.jpg gs://$DEVSHELL_PROJECT_ID

# Copy image from Cloud Storage back to local system
gsutil cp -r gs://$DEVSHELL_PROJECT_ID/ada.jpg .

# Copy image to another folder in Cloud Storage
gsutil cp gs://$DEVSHELL_PROJECT_ID/ada.jpg gs://$DEVSHELL_PROJECT_ID/image-folder/

# Make the image publicly readable
gsutil acl ch -u AllUsers:R gs://$DEVSHELL_PROJECT_ID/ada.jpg

echo "Done!!!"

#-----------------------------------------------------end----------------------------------------------------------#