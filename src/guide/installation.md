# Installation

This section explains how to install seatplus.

## Automated script

If you start fresh you might one to take adavante of the automated
script which will install all software dependecies and spins your
seatplus stack up:

``` shell
bash <(curl -fsSL https://git.io/JfqYZ) 
```

Once the script has finished seatplus containers will be starting and
for further configuration you will find the `.env` and the
`docker-compose.yml` file in `/opt/seatplus` best cd into it:

``` shell
cd /opt/seatplus
```
### Configure

Now you should [configure your application](./configure.md)

### Login for the first time

Navigate to your application and login

### Create superuser

enter the seatplus container

``` shell
docker-compose exec seat-plus sh
```

afterwards execute the following command followed by the characters name
``` shell
// replace the character_name including the curly brackets with your character name
php artisan s:a:s {character_name}
```


## Manual Deployment

### create seatplus folder and cd into it

``` shell
mkdir /opt/seatplus 
cd /opt/seatplus
```

### download `.env` and `docker-compose.yml`
``` shell
curl -fsSL https://raw.githubusercontent.com/seatplus/scripts/master/docker-compose/.env -o .env
curl -fsSL https://raw.githubusercontent.com/seatplus/scripts/master/docker-compose/docker-compose.yml -o docker-compose.yml
```

### generate random database password and write it to the .env file.

``` shell
sed -i -- 's/DB_PASSWORD=i_should_be_changed/DB_PASSWORD='$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c22 ; echo '')'/g' .env
```

### generate random application key and write it to the .env file.

``` shell
sed -i -- 's/APP_KEY=insecure/APP_KEY='$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c32 ; echo '')'/g' .env
```

### Configure your appliaction

[configure your application](./configure.md)

### Spin up your docker-compose
``` shell
docker-compose up -d
```

### Login

Navigate to your application and login

### Assign superuser

enter the seatplus container

``` shell
docker-compose exec seat-plus sh
```

afterwards execute the following command followed by the characters name
``` shell
// replace the character_name including the curly brackets with your character name
php artisan s:a:s {character_name}
```

