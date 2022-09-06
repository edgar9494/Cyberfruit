from django.shortcuts import render
from django.views import generic

# Create your views here.
def base(request):
    return render(
        request,
        'base.html',
    )
def inicio(request):
    return render(
        request,'inicio.html',
    )    

def mercado(request):
    return render(
        request,'mercado.html',
    )  

def contratos(request):
    return render(
        request,'contratos.html',
    )    

def subastas(request):
    return render(
        request,'subastas.html',
    )        

def perfil(request):
    return render(
        request,'perfil.html',
    )    

def ingresar(request):
    return render(
        request,'ingresar.html',
    )    

def registrar(request):
    return render(
        request,'registrar.html',
    ) 
def estadisticas(request):
    return render(
        request,'estadisticas.html',
    ) 


