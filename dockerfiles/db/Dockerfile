FROM mysql:8.0.30

EXPOSE 3306

# A little tricky, but "my.cnf" path needs to be relative to docker-compose
ADD ./db/my.cnf /etc/mysql/conf.d/my.cnf

USER mysql
CMD ["mysqld"]
