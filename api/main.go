package main

import (
	"source/config"
	"source/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.New()
	router.Use(cors.Default())
	config.Connect()
	routes.ProductRoute(router)
	router.Run(":4545")
}
