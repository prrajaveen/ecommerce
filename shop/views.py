from django.shortcuts import render
from django.http import HttpResponse
from shop.models import Product
from math import ceil


# Create your views here.
def index(request):
    products=Product.objects.all()
    print(products)
    n=len(products)
    nSlides = n//4 + ceil((n/4)-(n//4))
    # params = {'no_of_slides':nSlides,'range':range(1,nSlides),'product' : products}
    # allproduct=[[products , range(1 ,nSlides), len(products)]]
    allproduct=[]
    catprod=Product.objects.values("category","id")
    cats={item['category'] for item in catprod}
    for cat in cats:
        print(cat)
        prod=Product.objects.filter(category=cat)
        n=len(prod)
        nSlides = n//4 + ceil((n/4)-(n//4))
        allproduct.append([prod , range(1 , nSlides) , nSlides])
    print(allproduct)

    params={'allproduct':allproduct}
    return render(request,"shop/index.html",params)
def about(request):
    return render(request,"shop/about.html")
def contact(request):
    return HttpResponse("contact")
def tracker(request):
    return HttpResponse("tracker")
def search(request):
    return HttpResponse("search")
def productView(request):
    return HttpResponse("product view")
def checkout(request):
    return HttpResponse("checkout")