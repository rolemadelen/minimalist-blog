---
title: "[RoR] Migrating from SQLite3 to PostgreSQL"
date: "2021-12-17 07:00:00"
lang: 'en'
---

Machine used: **macOS Monterey Version 12.0.1**

---

I was trying to deploy a rails app to Heroku, but there was an issue.

Rails uses SQLite3 as a default database, but I cannot use SQLite3 with Heroku.
So I decided to change it to PostgreSQL.

# New Project
If starting a new project, you can simply run the following code to create RoR app with postrgesql:
```bash
$ rails new -d postgresql
```

# Existing Project

## Remove `sqlite3` gem and add `pg`

```rb
 gem 'sqlite3' 
gem 'pg'
```

Then, run `bundle install`.


If you face an error while installing `pg`, try:

```bash
$ brew install postgresql
 $ yum install postgresql-devel
 $ apt-get install libpq-dev
```
and run `bundle install` again. 

## Update `config/database.yml`

Your `database.yml` will look something like this:

```yml
default: &default
adapter: sqlite3
pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
timeout: 5000

development:
<<: *default
database: db/development.sqlite3

test:
<<: *default
database: db/test.sqlite3

production:
<<: *default
database: db/production.sqlite3
```

change `sqlite3` to `postgresql` and also give a unique name for each database:

```yml
default: &default
adapter: postgresql
pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
timeout: 5000

development:
<<: *default
database: db/development_pg

test:
<<: *default
database: db/test_pg

production:
<<: *default
database: db/production_pg
```

## Create and migrate DB

```bash
$ rake db:create
$ rake db:migrate
```

If you get `PG::ConnectionBad: could not connect to server: Connection refused` error,

1) check if postrgre is running:
```bash
$ -D /usr/local/var/postgres status
pg_ctl: server is running (PID: 28549)
```
if not running... well run it :)

```bash
$ pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
```

2) try adding `host: localhost` to `database.yml`
```yml
.
.
pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
timeout: 5000
host: localhost
.
.
```

Now I'm ready to deploy the app :)

# Reference
- [SQLite on Heroku](https://devcenter.heroku.com/articles/sqlite3)
- ['gem install pg'が失敗するときの対処法](https://qiita.com/tdrk/items/812e7ea763080e147757)
- [rake db:migrateしようとするとPG::ConnectionBad: could not connect to server: Connection refusedエラーで怒られる](https://qiita.com/weedslayer/items/46689b4f6f858f7d2c89)