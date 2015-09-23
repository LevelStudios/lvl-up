import {customElement, bindable, inject} from 'aurelia-framework';
import mapsapi from 'google-maps-api';

@inject(mapsapi('AIzaSyBOMbRqFJS_A134-NzeMbkqTEMGVOyHlLk'))
export class MapCustomElement {

    @bindable lng;
    @bindable lat;
    @bindable zoom;
    map;

    constructor(mapsAPI, element) {
        this.mapLoadingPromise = mapsAPI.then(maps => this.maps = maps);
    }

    attached() {

        this.mapLoadingPromise.then(() => {

            var initial     = new google.maps.LatLng(45.518767, -122.6750464);
            var zoom        = this.zoom || 7;

            var myOptions = {
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.map = new this.maps.Map(this.mapDiv, myOptions);
            this.map.setCenter(initial);
        });
    }


}