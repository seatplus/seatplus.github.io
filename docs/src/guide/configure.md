# Configure

This section explains how to configure seatplus. Whenever you do change
the `.env` File, you should run the following command to pickup changes
within the docker containers:

``` shell
docker-compose up -d
```

## ESI

In order to be able to consume EVE Online related data you must register
your application in the
[EVE Online Developers portal](https://developers.eveonline.com/applications)

1. Register your application on the EVE Online Developers portal for
   both Authentication and API Access.
   * Select the connection type to be of `Authentication & API Access`
   * Select all Permissions (💡 these are all the scopes the application
     could theoretically access, which are used by the end of the day is
     configured later in seatplus).
   * Set your callback-url f.e.
     `https://seatplus.yourdomain.com/auth/eve/callback`

::: danger  
You must replace `https://seatplus.yourdomain.com` with *your* qualified
url which is accesible from the internet  
:::

2. Configure your `EVE_CLIENT_ID`, `EVE_CLIENT_SECRET` and `EVE_CALLBACK_URL`
   in the .env configuration file

```{2-4}
# Eve Online SSO Configuration 
EVE_CLIENT_ID=null
EVE_CLIENT_SECRET=null
EVE_CALLBACK_URL=https://seatplus.yourdomain.com/auth/eve/callback
```


Once the script has finished seatplus containers will be starting and
for further configuration you will find the `.env` and the
`docker-compose.yml` file in `/opt/seatplus` best cd into it:

```shell
cd /opt/seatplus
```

Now you should

## External Ports

if you do not want seatplus to be exposed on default port 8080 you might
change these lines in the `.env` file.

``` {5-6}
# External Ports
# These are the local ports where the respective services will be available on.
# The ports themselves are not the standard ports as you are encouraged to front
# SeAT with your own nginx proxy & letsencrypt combination.
NGINX_HTTP=8080
NGINX_HTTPS=8443
```



