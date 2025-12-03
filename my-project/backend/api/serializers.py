from rest_framework import serializers
from .models import Hobby, Product, ArtProduct, SportProduct, BookProduct, ProductImage

class HobbySerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby
        fields = ['id', 'name', 'description', 'category']

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image_url']

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    art_details = serializers.SerializerMethodField()
    sport_details = serializers.SerializerMethodField()
    book_details = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id', 'hobby', 'name', 'description', 'price', 'created_at', 
            'stock', 'available', 'images', 'art_details', 'sport_details', 'book_details'
        ]

    def get_art_details(self, obj):
        if hasattr(obj, 'artproduct'):
            return {'art_type': obj.artproduct.art_type}
        return None
    
    def get_sport_details(self, obj):
        if hasattr(obj, 'sportproduct'):
            return {'sport_type': obj.sportproduct.sport_type}
        return None
    
    def get_book_details(self, obj):
        if hasattr(obj, 'bookproduct'):
            return {'genre': obj.bookproduct.genre}
        return None
