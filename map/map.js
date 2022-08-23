


function initMap() {
  ////////////////////////////////
  ////////////마커 표시///////////
  ////////////////////////////////
  
  // myLatLng >> 서울 시청
      const myLatLng = {
        lat: 37.55902624,
        lng: 126.9749014
      };

  // DB로 연동해서 지역 나타내기 ()
  // 이미지도 연동할 수 있지 않을까? done
  // 마커 별 개수와 색깔로 구분하기 ()
  // 이미지 추가 하기 done
  // gps done
  // gps 기준 원 done
  // 왼쪽 식당 목록 메뉴 -> 클릭하면 해당 마커가 있는 위치로 이동 / 상세정보도 같이 띄울 수 있으면 best ()


  var locations = [
      // 야매
      ['서울역 <img src=img1.png style = height:100px width:100px>', 37.5546788, 126.9706069],
      ['서울특별시청', 37.5668260, 126.9786567],   
      ['을지로입구역', 37.5660373, 126.9821930],   
      ['덕수궁', 37.5655638, 126.974894],   
      // 이상적인 info
      ['<div class="wrap"><div class="text-box"><h4>경복궁</h4><div class="img-box"><img src="https://image.shutterstock.com/image-vector/palace-icon-outline-vector-web-260nw-1046855677.jpg"></div><a target="_blank" href="https://www.royalpalace.go.kr/"><p>홈페이지 방문하기</p></a></div></div>', 37.577624, 126.976020],
    ];
    

  

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,   
      center: myLatLng,  
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {   
      marker = new google.maps.Marker({   
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map   
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {   
          infowindow.setContent(locations[i][0]);   
          infowindow.open(map, marker);   
        }
      })(marker, i));

    }    
    ///////////////////////////////
    ///////////gps기능/////////////
    ///////////////////////////////
    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    
    locationButton.textContent = "내 위치로 검색";
    locationButton.classList.add("custom-map-control-button");

    //맵 위에 버튼을 표시
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
          //자신의 좌표값 얻기
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            //지도에 위치 표시
            infoWindow.setPosition(pos);
          //  infoWindow.setContent("Location found.");

          var myIcon = new google.maps.MarkerImage("my_position.png", null, null, null, new google.maps.Size(40,40));
            marker = new google.maps.Marker({   
            position: new google.maps.LatLng(pos),
            map: map,
            icon: myIcon,
          });
          //  infoWindow.open(map);
            map.setCenter(pos);
      
          // Add the circle for this city to the map.
          // 원 중첩되는 거
          new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "none",
            fillOpacity: 0,
            map,
            center: pos,
            radius: 1000,
          });

          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
// >> 아니지 map.html에 <ul>nav-links_t에 div로 정보만 추가 시키면 
// 여기서 애니메이션으로 동작하는 거니까 
// map.js에서 html로 바로 추가 시켜주자!! (for문 이용하기)

// css적용 시켜서 애니메이션 적용 시키기
//*** 정 안되면 ㅣli a ㅣ에 다 class 적용
    const nav_t = document.querySelector(".nav-links_t");
    
    const new_li = document.createElement('li');
    const new_a = document.createElement('a');
    
    const newText = document.createTextNode('안녕하세요!');

    new_a.appendChild(newText);
    new_li.appendChild(new_a);
    nav_t.appendChild(new_li);
    new_a.href='#'

    // new_li.style.cssText = "list-style: none;";
    // new_a.style.cssText = "color: rgb(226, 226, 226); text-decoration: none; letter-spacing: 3px; font-weight: bold; font-size: 14px; z-index:2";

    
  }
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
window.initMap = initMap;
				
var marker = new google.maps.Marker({
  position: myLatLng,
  
  map: map,					
});


const icon = {
  url: " 아이콘 이미지의 url ",
  size: new google.maps.Size(40, 40),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(20, 40),
  scaledSize: new google.maps.Size(40, 40),
};


function ra_list() {

  
  
}




     
