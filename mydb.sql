CREATE TABLE db_users (
    user_id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL
)

INSERT INTO db_users(username,password) VALUES ('gamero1995', 'hello');
INSERT INTO db_users(username,password) VALUES ('gamero19', 'hihello');

