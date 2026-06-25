from rest_framework import viewsets
from .models import Car
from .serializers import CarSerializer
from .pagination import CarPagination

class CarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

    def get_queryset(self):
        queryset = Car.objects.all()

        brand = self.request.query_params.get('brand')
        available = self.request.query_params.get('is_available')

        if brand:
            queryset = queryset.filter(brand__icontains=brand)

        if available:
            queryset = queryset.filter(
                is_available=available.lower() == 'true'
            )

        return queryset