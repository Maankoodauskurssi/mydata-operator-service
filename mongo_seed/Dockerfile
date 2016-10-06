FROM mongo
COPY db_seed.json /db_seed.json
CMD mongoimport --host mongo --db mydata --collection consents --type json --file /db_seed.json --jsonArray