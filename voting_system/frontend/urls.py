from django.urls import path
from .views import index
from .views import get_user_info


urlpatterns = [
 
    path('',index),
    path('login/',index),
    path('user-info/', get_user_info, name='user_info'),


]
