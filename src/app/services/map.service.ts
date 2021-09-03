import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SAVED_ACTIVITIES } from '../shared/activities';

let apiToken = environment.MAPBOX_API_KEY;
declare let omnivore: any;
declare let L: any;

const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find(run => run.id === id); // create a copy of the array and find the value needed, then return it
  }

  plotActivity = (id: number) => {
    var myStyle = {
      color: '#3949AB',
      weight: 5,
      opacity: .95
    };

    var map = L.map('map').setView(defaultCoords, defaultZoom!);

    map.maxZoom = 100;
    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.satellite',
      accessToken: apiToken
    }).addTo(map);

    var customLayer = L.geoJson(null, {
      style: myStyle
    });

    var gpxLayer = omnivore.gpx((SAVED_ACTIVITIES as any).slice(0).find((run: any) => run.id == id).gpxData, null, customLayer)
      .on('ready', function () {
        map.fitBounds(gpxLayer.getBounds());
      }).addTo(map);
  }
}
