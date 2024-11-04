import pytest
from unittest.mock import patch
from app import app 

@pytest.fixture
def client():
    app.testing = True
    with app.test_client() as client:
        yield client

@patch("requests.get")
def test_search_with_city(mock_get, client):
    mock_response = mock_get.return_value
    mock_response.status_code = 200
    mock_response.json.return_value = {
        'location': {
            'name': 'Rabat',
            'region': '',
            'country': 'Morocco',
            'lat': 34.0253,
            'lon': -6.8361,
            'tz_id': 'Africa/Casablanca',
            'localtime': '2024-11-01 21:45'
        },
        'current': {
            'temp_c': 17.3,
            'condition': {'text': 'Partly cloudy'}
        }
    }

    response = client.post('/search', data={'city': 'Rabat'})
    
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data['location']['name'] == 'Rabat'
    assert json_data['location']['country'] == 'Morocco'
    assert json_data['current']['temp_c'] == 17.3
    assert json_data['current']['condition']['text'] == 'Partly cloudy'


