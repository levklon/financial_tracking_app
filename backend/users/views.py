from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.views import APIView
from django.http import JsonResponse
from .serializers import UserRegistrationSerializer

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'status': 'success'}, status=200)
        return JsonResponse({'status': 'error'}, status=400)

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return JsonResponse({'status': 'logged out'}, status=200)
