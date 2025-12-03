from django.db import models

from django.db import models

class Hobby(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=100)  # "books", "art", "sport", "music"

    def __str__(self):
        return self.name

class Product(models.Model):
    hobby = models.ForeignKey(Hobby, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    stock = models.IntegerField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} ({self.hobby.name})"

# ---------------- Specific Models -----------------

class ArtProduct(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='art_details')
    art_type = models.CharField(max_length=50, choices=[('traditional','Traditional'), ('electronic','Electronic')])

    def __str__(self):
        return f"Art details for {self.product.name}"

class SportProduct(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='sport_details')
    sport_type = models.CharField(max_length=50)  # football, tennis и т.д.

    def __str__(self):
        return f"Sport details for {self.product.name}"

class BookProduct(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE, related_name='book_details')
    genre = models.CharField(max_length=100)  # fiction, sci-fi и т.д.

    def __str__(self):
        return f"Book details for {self.product.name}"

    
class ProductImage(models.Model):
    product = models.ForeignKey('Product', related_name='images', on_delete=models.CASCADE)
    image_url = models.URLField()

    def __str__(self):
        return f"Image for {self.product.name}"