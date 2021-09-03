import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  activity: any;
  activityName!: string;
  activityComments!: string;
  activityDate!: Date;
  activityDistance!: number;
  gpx: any;

  constructor(
    private _mapService: MapService,
    private _route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this._mapService.plotActivity(+this._route.snapshot.params['id']);
    this.activityName = this.activity.name;
    this.activityComments = this.activity.comments;
    this.activityDate = this.activity.date;
    this.activityDistance = this.activity.distance;
    this.gpx = this.activity.gpxData;
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.activity = this._mapService.getActivity(
      +this._route.snapshot.params['id'] // convert the param to number before passing it
    );
  }

}
