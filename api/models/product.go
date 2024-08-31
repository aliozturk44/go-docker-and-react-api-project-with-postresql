package models

type Product struct {
	Id       uint64 `json:"id" gorm:"primary_key;not null"`
	Name     string `json:"name" gorm:"not null;default:null"`
	Price    string `json:"price" gorm:"not null;default:null"`
	Quantity string `json:"quantity" gorm:"not null;default:null"`
	Status   string `json:"status"`
}
