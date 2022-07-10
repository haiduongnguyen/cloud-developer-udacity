export const config = {
  "dev": {
    "username": "postgres123",
    "password": "postgres123",
    "database": "postgres",
    "host": "my-db-for-udacity.ccxdyktatku2.ap-southeast-1.rds.amazonaws.com:5432",
    // "username": "porstgres123",
    // "password": "porstgres123",
    // "database": "porstgres",
    // "host": "",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
