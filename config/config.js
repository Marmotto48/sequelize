module.exports = {
  
  /**Declaration of databases for my development environment**/
    "development": {
        "databases": {
            "sultanDB": {
                "database": "sultanDB", //you should always save these values in environment variables
                "username": "postgres",  //only for testing purposes you can also define the values here
                "password":  "123456",
                "host": "localhost",
                "dialect": "postgres"  //here you need to define the dialect of your databse, in my case it is Postgres
            },
            "aladinDB": {
                "database": "aladinDB", 
                "username": "postgres",  
                "password":  "123456",
                "host": "localhost",
                "dialect": "postgres"  
            },  
        },
    },
    "sultanDB": {
        "database": "sultanDB", //you should always save these values in environment variables
        "username": "postgres",  //only for testing purposes you can also define the values here
        "password":  "123456",
        "host": "localhost",
        "dialect": "postgres"  //here you need to define the dialect of your databse, in my case it is Postgres
    },
    "aladinDB": {
        "database": "aladinDB", 
        "username": "postgres",  
        "password":  "123456",
        "host": "localhost",
        "dialect": "postgres"  
    },  
}