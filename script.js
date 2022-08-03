let collectMarkers=[];
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'prev') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}
function initMap(){
   map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.809962404454765, lng: -117.91895316314884},
        zoom: 16.3,
        maxZoom:17,
        minZoom:15,
        mapId:'d98836cc149c2843'
      });
      const logo=new google.maps.Marker({
        //33.80825266634271, -117.91897917169051
        position:{lat:33.80825266634271, lng:-117.91897917169051},
        map:map,
        title:"Disneyland",
        icon:{
            url:"svg/logo.svg",
            scaledSize:new google.maps.Size(250,200)
        }
    });
      map.addListener('zoom_changed',function(){
          console.log(map.getZoom())
          setMarkers(logo)
      })
      const markers=[
        [
            'Toy Story',
            33.80458278940783,
            -117.92164153068752,
            "svg/toy-story-rex.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='toystory.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        /*
        [
            'Castle',
            33.81210262961314, 
            -117.91897268597586,
            "disney-castle-monogram.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        */
        [
            'Space Mountain',
            33.81099322215978, 
            -117.91749857683718,
            "svg/disney-castle-monogram.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        [
            //33.81188357413109, -117.92115403710388
            'Fantasia',
            33.81188357413109, 
            -117.92115403710388,
            "svg/fantasia.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        [
            //33.80505666800941, -117.91980093790193
            'Radiator Springs Racer',
            33.80505666800941, 
            -117.91980093790193,
            "svg/cars.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        [
            //33.81229857317999, -117.91762078824527
            'Astro Blaster',
            33.81229857317999, 
            -117.91762078824527,
            "svg/buzz.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        [
            //33.80459720436582, -117.92051687847922
            'Incredicoaster',
            33.80459720436582, 
            -117.92051687847922,
            "svg/incredibles.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        [
            //33.80591852711783, -117.92259829053314
            'Jumpin Jellyfish',
            33.80591852711783, 
            -117.92259829053314,
            "svg/ariel.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ],
        [
            //33.81311153984658, -117.91917398316319
            'Snow Whites Enchanted Wish',
            33.81311153984658, 
            -117.91917398316319,
            "svg/snowwhite.svg",
            "<div style='background:blue;height:45%;width:45%;'><img style='float:left;height:100%;width:100%;'src='castle.jpg'></div><div style='float:center;margin:5px;'><h2 style='text-align:center;'>Toy Story</h2><p style='text-align:center;'>Hello testing this thing out for a test out tesing out testing out.</p></div>"
        ]
    ];
      

    
    for(let i=0;i<markers.length;i++){
        const currMarker=markers[i]
        const marker = new google.maps.Marker({
            position: {lat:currMarker[1], lng:currMarker[2]},
            map: map,
            title:currMarker[0],
            icon:{
                url:currMarker[3],
                scaledSize:new google.maps.Size(60,56)
            }
        });
        const infowindow=new google.maps.InfoWindow({
            content:currMarker[4]
        })
        marker.addListener("click",()=>{
            infowindow.open(map,marker);
        });

        collectMarkers.push(marker);
    }  

}

function removeMarkers(){
    console.log("Test")
    for(let i=0;i<collectMarkers.length;i++){
        collectMarkers[i].setVisible(false);
    }
    //logo.setVisible(true);
    
}
function setMarkers(logo){
    for(let i=0;i<collectMarkers.length;i++){
        collectMarkers[i].setVisible(map.getZoom()>15);
    }
    logo.setVisible(!(map.getZoom()>15))
}
