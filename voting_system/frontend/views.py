from django.shortcuts import render

# Create your views here.
def index(request,*args,**kwargs):
    return render(request, 'frontend/index.html')



from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

@login_required
def get_user_info(request):
    user = request.user
    user_info = {
        'username': user.username,
        'email': user.email,
        'firstname': user.first_name,
        # Add more user details as needed
    }
    return JsonResponse(user_info)

