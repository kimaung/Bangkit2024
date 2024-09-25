# Google Cloud Dataproc Commands

### Create Dataproc Cluster

gcloud dataproc clusters create example-cluster \
 --region=us-central1 \
 --zone=us-central1-c \
 --master-machine-type=e2-standard-2 \
 --master-boot-disk-size=30GB \
 --num-workers=2 \
 --worker-machine-type=e2-standard-2 \
 --worker-boot-disk-size=30GB \
 --image-version=2.0-debian10

### Submit Spark Job

gcloud dataproc jobs submit spark \
 --cluster=example-cluster \
 --region=us-central1 \
 --class=org.apache.spark.examples.SparkPi \
 --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \
 -- 1000

### Submit Another Spark Job

gcloud dataproc jobs submit spark \
 --cluster=example-cluster \
 --region=us-central1 \
 --class=org.apache.spark.examples.SparkPi \
 --jars=file:///usr/lib/spark/examples/jars/spark-examples.jar \
 -- 1000
