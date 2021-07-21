from main.views import index_view, line_chart_view, map_view
from django.urls import path

urlpatterns = [
    path("line_chart/", line_chart_view),
    path("map_chart/", map_view),
    path("chart", index_view),
    path("map", index_view),
    path("", index_view),
]
