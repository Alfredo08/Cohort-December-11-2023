
CREATE TABLE users(
    id INTEGER PRIMARY KEY SERIAL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER NOT NULL
);

CREATE TABLE projects(
    id INTEGER PRIMARY KEY SERIAL,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE users_with_projects(
    user_id INTEGER,
    project_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (project_id) REFERENCES projects(id),
    PRIMARY KEY (user_id, project_id)
)