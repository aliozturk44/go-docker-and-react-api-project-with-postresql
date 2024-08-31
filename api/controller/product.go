package controller

import (
	"net/http"
	"source/config"
	"source/models"

	"github.com/gin-gonic/gin"
)

func ListProduct(ctx *gin.Context) {
	product := []models.Product{}
	config.DB.Find(&product)
	ctx.JSON(http.StatusOK, &product)

}

func ListProduct2(ctx *gin.Context) {
	id := ctx.Param("id")
	var product models.Product
	ctx.Bind(&product)
	config.DB.First(&product, id)
	ctx.JSON(http.StatusOK, &product)

}

func CreateProduct(ctx *gin.Context) {
	var product models.Product
	ctx.BindJSON(&product)

	if err := config.DB.Create(&product).Error; err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"Error": err.Error()})
		return
	} else {
		ctx.JSON(http.StatusCreated, &product)
	}

}

func UpdateProduct(ctx *gin.Context) {

	id := ctx.Param("id")
	var UpdateProduct models.Product
	var product models.Product

	ctx.Bind(&UpdateProduct)

	config.DB.First(&product, id)

	config.DB.Model(&product).Updates(models.Product{
		Id:       UpdateProduct.Id,
		Name:     UpdateProduct.Name,
		Price:    UpdateProduct.Price,
		Quantity: UpdateProduct.Quantity,
		Status:   UpdateProduct.Status,
	})

	ctx.JSON(http.StatusOK, &product)

}

func DeleteProduct(ctx *gin.Context) {

	id := ctx.Param("id")
	var product models.Product
	ctx.Bind(&product)

	config.DB.Delete(&models.Product{}, id)

	ctx.JSON(http.StatusOK, &product)
}
