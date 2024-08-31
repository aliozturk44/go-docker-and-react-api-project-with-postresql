package routes

import (
	"source/controller"

	"github.com/gin-gonic/gin"
)

func ProductRoute(router *gin.Engine) {
	v1 := router.Group("/api/v1")
	v1.GET("/product", controller.ListProduct)
	v1.GET("/product/:id", controller.ListProduct2)
	v1.POST("/product", controller.CreateProduct)
	v1.PUT("/product/:id", controller.UpdateProduct)
	v1.DELETE("/product/:id", controller.DeleteProduct)
}
