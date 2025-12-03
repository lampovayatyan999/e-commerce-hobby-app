from django.http import HttpResponse
from rest_framework import viewsets
from .models import Hobby, Product
from .serializers import HobbySerializer, ProductSerializer

class HobbyViewSet(viewsets.ModelViewSet):
    queryset = Hobby.objects.all()
    serializer_class = HobbySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer