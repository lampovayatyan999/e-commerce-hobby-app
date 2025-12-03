from django.contrib import admin
from .models import Hobby, Product, ProductImage, ArtProduct, BookProduct, SportProduct

# Inline для картинок
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

# Настройка админки для Product
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]

# Регистрируем модели
admin.site.register(Hobby)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)
admin.site.register(ArtProduct)
admin.site.register(BookProduct)
admin.site.register(SportProduct)
