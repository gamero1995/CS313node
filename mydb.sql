DROP TABLE recipe;
DROP TABLE db_users;



CREATE TABLE db_users (
    user_id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    user_name VARCHAR NOT NULL,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE category (
    category_id SERIAL NOT NULL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL
);

CREATE TABLE recipe (
    recipe_id SERIAL NOT NULL PRIMARY KEY,
    recipe_name VARCHAR NOT NULL,
    ingredients VARCHAR NOT NULL,
    category VARCHAR NOT NULL,
    direction VARCHAR NOT NULL,
    youtube_link VARCHAR NOT NULL,
    user_id INT NOT NULL REFERENCES db_users(user_id)
);



INSERT INTO db_users(username,user_name, password) VALUES ('admin', 'Admin', 'admin');
INSERT INTO db_users(username,password) VALUES ('gamero19', 'hihello');
INSERT INTO recipe (recipe_name, ingredients, category, direction, youtube_link, user_id) VALUES ('Flank Steak Recipe', '1 1/2 pound flank steak
Salt
Freshly ground black pepper
Dry mustard
Softened butter', 'Dinner', '1 Tenderize the steak with shallow cuts: Remove the steak from the refrigerator a half hour before cooking.

Cut away any tough connective tissue on the surface of the steak.

Using the tip of a sharp knife, poke small cuts into the meat, almost all the way through. The cuts should be at an angle, in the direction of the grain of the meat as the knife tip is going in. The cuts should be about an inch apart from each other.

Turn the steak over and repeat the cuts on the other side. Make sure that the cuts you are making on this side are parallel with the cuts you made on the other side, otherwise you may cut across an existing cut, and end up poking a hole through the meat.', 'YIjWwZwlHQg', '1')