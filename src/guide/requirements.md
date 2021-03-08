# Requirements

As seatplus is a one-man project it will only be available as
docker-based installation. This ensures that users of seat-plus have the
same environment as the developers and allows for better support in any
case.

::: tip  
Configuring a users webserver is considered to be out of scope
for this project. By the end of this installation are going to have a
running instance on the configured port (port 8080 by default).  
:::

## Hardware Requirements

| Type                    | up to 25 characters                             | Up to 500 Characters     |
|:------------------------|:------------------------------------------------|:-------------------------|
| CPU                     | 2 core                                          | 2 core                   |
| Memory                  | 2 GB of RAM (incl. swap)                        | 4 GB of RAM (incl. swap) |
| Local Space             | 8-10 GB                                         | 15-20 GB                 |

::: warning
Disk space requirements tend to grow the more character and the more history is persisted
:::

## Software Requirements

| Type           | Requirement |
|:---------------|:------------|
| Docker         | ^19.03      |
| Docker Compose | ^ 1.25      |

