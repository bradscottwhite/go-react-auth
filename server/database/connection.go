package database

import (
	"os"
	"fmt"
	"log"

	"go-auth/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	host	 := os.Getenv("DB_HOST")
	port	 := os.Getenv("DB_PORT")
	user	 := os.Getenv("DB_USER")
	dbname	 := os.Getenv("DB_NAME")
	password := os.Getenv("DB_PASSWORD")

	conn := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		host,
		port,
		user,
		dbname,
		password,
	)

	db, err := gorm.Open(postgres.Open(conn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database \n", err)
	}

	DB = db

	db.AutoMigrate(&models.User{})
}
