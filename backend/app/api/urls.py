from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewset, signup, GameLogViewSet, analyze_game_logs, plot_performance_trend
router = DefaultRouter()
router.register(r'posts', PostViewset)
router.register(r'gamelogs', GameLogViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', include(router.urls)),
    path('signup/', signup, name='signup'),
    path('api/analyze/', analyze_game_logs, name='analyze_game_logs'),  # Add this line
    path('api/plot/', plot_performance_trend, name='plot_performance_trend'),
]