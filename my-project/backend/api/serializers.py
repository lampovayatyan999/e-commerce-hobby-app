from rest_framework import serializers
from models import Product, Hobby, ProductImage

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'hobby', 'name', 'description', 'price', 'created_at', 'stock', 'available']


class HobbyProductSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    
    class Meta:
        model = Hobby
        fields = ['id', 'name', 'description']
    