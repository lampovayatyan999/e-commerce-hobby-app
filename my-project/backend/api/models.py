from django.db import models

# Create your models here.
class Hobby(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
        verbose_name='Hobby name',
    ),
    description = models.TextField()

    class Meta:
        verbose_name = 'Hobby'
        verbose_name_plural = 'Hobby'

    def __str__(self):
        return self.name

class Product(models.Model):
    hobby = models.ForeignKey(
        Hobby,
        on_delete=models.CASCADE,
        related_name='products',
        verbose_name='Тип хобби'
    )

    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    stock = models.IntegerField(verbose_name='Осталось на складе')
    available = models.BooleanField(default=True, verbose_name="Доступен")

    class Meta:
        ordering = ('name',)
        verbose_name = "Товар"
        verbose_name_plural = "Товары"

    def __str__(self):
        return self.name
    
class ProductImage(models.Model):
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='images',
        verbose_name='Продукт'
    )
    image = models.ImageField(upload_to='product_images/')
    alt_text = models.CharField(max_length=255, blank=True)

    class Meta:
        verbose_name = "Изображение продукта"
        verbose_name_plural = "Изображения продуктов"

    def __str__(self):
        return f"Image for {self.product.name}"

