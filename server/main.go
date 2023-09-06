package main

import (
	"os"
	"log"
	"go-auth/database"
	"go-auth/routes"
	_ "github.com/joho/godotenv/autoload"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func getPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	return ":" + port
}

func main() {
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
        AllowHeaders:     "Content-Type,access-control-allow-origin, access-control-allow-headers",
        AllowOrigins:     "*",
		AllowCredentials: true,
	}))

	routes.Setup(app)

	log.Fatal(app.Listen(getPort()))
}
