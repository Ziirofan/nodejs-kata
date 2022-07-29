tr ";" "\t" < authors.csv | mongoimport --db test --collection authors --type=tsv --headerline
tr ";" "\t" < books.csv | mongoimport --db test --collection books --type=tsv --headerline
tr ";" "\t" < magazines.csv | mongoimport --db test --collection magazines --type=tsv --headerline