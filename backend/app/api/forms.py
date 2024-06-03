from django import forms
from ..models import GameLog

class GameLogForm(forms.ModelForm):
    class Meta:
        model = GameLog
        fields = ['date', 'map', 'result', 'role', 'eliminations', 'assists', 'deaths', 'damage', 'healing', 'mitigation']
