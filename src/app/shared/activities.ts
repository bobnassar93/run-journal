import { IActivity } from "./activity.model";

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        id: 1,
        name: 'Main Bike Trails',
        date: new Date('09/03/2021'),
        comments: 'Nice day, cool temps',
        distance: 16.2,
        gpxData: '../../assets/gpx/1.gpx'
    },
    {
        id: 2,
        name: 'Industrial Park',
        date: new Date('06/04/2017'),
        gpxData: '../../assets/gpx/1.gpx',
        distance: 1.2,
        comments: 'Cool and windy.'
    },
    {
        id: 3,
        name: 'Forest Route',
        date: new Date('06/05/2017'),
        gpxData: '../../assets/gpx/2.gpx',
        distance: 3.2,
        comments: 'Evening run.'
    },
    {
        id: 4,
        name: 'Lake Shore',
        date: new Date('06/08/2017'),
        gpxData: '../../assets/gpx/4.gpx',
        distance: 8.4,
        comments: 'Cool and windy by the lake.'
    }
]