from django.shortcuts import render
from django.http import HttpResponse
from shop.models import Product
from math import ceil


# Create your views here.
def index(request):
    products=Product.objects.all()
    # print(type(products))
    # print(products)
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
    return render(request,'shop/contact.html')
def tracker(request):
    return render(request,"shop/tracker.html")
def search(request):
    return render(request,'shop/shop.html')
def productView(request,myid):
    prod=Product.objects.filter(id=myid)
    params={'product': prod[0] }
    return render(request,'shop/prodview.html',params)
def checkout(request):
    return render(request,"shop/checkout.html")