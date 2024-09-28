#!/bin/bash
#----------------------------------------------------start--------------------------------------------------#

echo "Starting Execution"

gcloud sql instances create myinstance \
  --root-password=quicklab \
  --database-version=MYSQL_8_0 \
  --tier=db-n1-standard-4 \
  --region="${ZONE%-*}"

gcloud sql databases create guestbook --instance=myinstance

echo "Done !!!"

#-----------------------------------------------------end----------------------------------------------------------#
