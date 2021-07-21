from django.http.response import JsonResponse
from django.shortcuts import render
from datetime import datetime
from random import randint
import pandas as pd
import numpy as np

MAX_COUNT = 50
COLORS = {
    "A": "#14213d",
    "B": "#006d77",
    "C": "#fca311",
}

# Create your views here.
def index_view(request, *args, **kwargs):
    return render(request, "index.html")


def get_line():
    line = [0]
    for x in range(1, MAX_COUNT):
        line.append(max(line[x - 1] + randint(-20, +40), 0))
    return line


def line_chart_view(request, *args, **kwargs):
    index = list(pd.date_range(start="2021-1-1", periods=MAX_COUNT))

    datasets = [
        {
            "data": get_line(),
            "backgroundColor": COLORS[x],
            "borderColor": COLORS[x],
            "fill": False,
            "label": x,
            "pointRadius": 0,
        }
        for x in list(COLORS.keys())
    ]
    data = {
        "datasets": datasets,
        "labels": index,
    }

    context = {
        "data": data,
        "options": {
            "scales": {
                "x": {
                    "display": True,
                    "title": {"display": True, "text": "Дата"},
                },
                "y": {
                    "display": True,
                    "title": {
                        "display": True,
                        "text": "Суммарное значение",
                    },
                },
            },
            "plugins": {
                # "filler": {"drawTime": "beforeDraw"},
                "title": {"display": True, "text": "Графики различных прогрессий"},
            },
        },
    }
    # print(context)
    return JsonResponse(context)


def map_view(request):
    context = {
        "options": {
            "latitude": 55.79550673539962,
            "longitude": 37.550489878900656,
            "width": "80vw",
            "height": "70vh",
            "zoom": 12,
        },
        "data": [
            {
                "latitude": 55.79550673539962,
                "longitude": 37.550489878900656,
                "name": "item1",
                "color": "#e63946",
                "description": "some text",
            },
            {
                "latitude": 55.718949,
                "longitude": 37.637204,
                "name": "item2",
                "color": "#3d405b",
                "description": "some text",
            },
            {
                "latitude": 55.744168,
                "longitude": 37.623040,
                "name": "item3",
                "color": "#3d405b",
                "description": "some text",
            },
            {
                "latitude": 55.759500,
                "longitude": 37.636015,
                "name": "item4",
                "color": "#3d405b",
                "description": "some text",
            },
        ],
    }
    return JsonResponse(context)
