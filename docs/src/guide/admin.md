# Admin

This section explains how to administrate seatplus.

## Live Container Logs

``` shell
docker-compose logs --tail 10 -f
```

### Enter the container

Whenever you are being asked or have the need to run an artisan command
you may enter the seatplus container with the following command

``` shell
docker-compose exec seat-plus sh
```

This is only rarely needed.