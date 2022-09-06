from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='base'),
    path('inicio/', views.inicio, name='inicio'),
    path('mercado/', views.mercado, name='mercado'),
    path('contratos/', views.contratos, name='contratos'),
    path('subastas/', views.subastas, name='subastas'),
    path('perfil/', views.perfil, name='perfil'),
    path('ingresar/', views.ingresar, name='ingresar'),
    path('registrar/', views.registrar, name='registrar'),
    path('estadisticas/', views.estadisticas, name='estadisticas'),
    
]