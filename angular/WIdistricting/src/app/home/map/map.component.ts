import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx"
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map: any;

  constructor() {}

  ngOnInit() {
    this.createMap();
    this.handlePointerEvents();
  }

  createMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2tidW9ubyIsImEiOiJjamMxNTZqOGYwNDd2MndwaGxzMmx4dGI5In0.7b1mLqadQxU7eJci9wukGw';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/skbuono/cjfrd0dh85pdh2so5ixruvpwk',
      position: 'relative',
      center: [-90, 44.8],
      zoom: 6,
    });
    this.map.addControl(new mapboxgl.NavigationControl());    
  }

  handlePointerEvents() {
    let map = this.map;
    let popup;
    let hover_disabled = false;
    //hover events
    this.map.on('mousemove', function (e) {
      if (!hover_disabled) {
        const features = map.queryRenderedFeatures(e.point);
        console.log(features)
        //determine district type
        let type;
        if (features[0].properties.District_S) {
          type = "Assembly";
        }
        else if (features[0].properties.SEN_NUM) {
          type = "Senate";
        }
        else {
          type = "Congress";
        }
        //remove previous popup to give appearance of following pointer
        if (popup) {
          popup.remove();
        }
        if (features[0].properties.STATENAME == "Wisconsin" || features[0].layer["source-layer"] == "Wisconsin_Senate_Districts_20-aki1n5"
           || features[0].layer["source-layer"] == "Wisconsin_Assembly_Districts_-akm189") {
          let popup_text: string;
          //set popup data according to district type
          if (type == "Congress") {
            popup_text = features[0].layer.id;
          }
          else if (type == "Assembly") {
            popup_text = "State Assembly District " + features[0].properties.District_S;
          }
          else {
            popup_text = "State Senate District " + features[0].properties.SEN_NUM;
          }
          popup = new mapboxgl.Popup({closeButton: false})
            .setLngLat(e.lngLat)
            .setHTML(popup_text)
          popup.addTo(map);
        }
      }
    });
    //click events
    this.map.on('click', function (e) {
      const features = map.queryRenderedFeatures(e.point);
      //determine district type
      let type;
      if (features[0].properties.District_S) {
        type = "Assembly";
      }
      else if (features[0].properties.SEN_NUM) {
        type = "Senate";
      }
      else {
        type = "Congress";
      }
      if (features[0].properties.STATENAME == "Wisconsin" || features[0].layer["source-layer"] == "Wisconsin_Senate_Districts_20-aki1n5"
      || features[0].layer["source-layer"] == "Wisconsin_Assembly_Districts_-akm189") {
        hover_disabled = true;
        let popup_text: string;
        //set popup data according to district type
        if (type == "Congress") {
          popup_text = features[0].layer.id;
        }
        else if (type == "Assembly") {
          popup_text = "State Assembly District " + features[0].properties.District_S;
        }
        else {
          popup_text = "State Senate District " + features[0].properties.SEN_NUM;
        }
        popup = new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML("<div class='center'>" + popup_text + "<br/> More metric data goes here!" + "</div>")
        popup.addTo(map);
        //re-enables hover listening when click popup is closed
        popup.on('close', function(e) {
          hover_disabled = false;
        })
      }
    });
  }
  
  //switches Mapbox style to display different district types
  switchMap(value: String) {
    let id;
    if (value == "Congress") {
      id = "cjfrd0dh85pdh2so5ixruvpwk";
    }
    else if (value == "State Senate") {
      id = "cjfwo9ix012gc2snwbqiq1hae";
    }
    else if (value == "State Assembly") {
      id = "cjfwogwk616q32rmidytk7ov8";
    }
    this.map.setStyle('mapbox://styles/skbuono/' + id);    
  }

}
