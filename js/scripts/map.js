function initMap() {
    let uluru = {
        lat: 47.81591996,
        lng: 35.17058551
    };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru,
        /*типы карт*/
        //mapTypeId:google.maps.MapTypeId.SATELLITE,      //вид со спутника
        //mapTypeId:google.maps.MapTypeId.TERRAIN,      //карта на основе данных о ландшафте
        //mapTypeId:google.maps.MapTypeId.HYBRID,       //cочетание обычной и спутниковой карты
        //mapTypeId:google.maps.MapTypeId.ROADMAP       //обычная карта(по умолчанию)
        /*отключение панели управления картой*/
        //disableDefaultUI:true
    });

    /*маркер*/
    /*возможно создать несколько маркеров с разными координатами*/
    let marker = new google.maps.Marker({
        position: uluru, //положение маркера
        map: map, //привязка к карте*/
        icon: "img/map/elf.png", //изменить значок*/
        title: 'jetro' //надпись при наведении на значок
    });


    /*надпись над значком*/
    let content = "<p style='color: green'>JETRO</p>";
    let infowindow = new google.maps.InfoWindow({
        content: content,
        //maxWidth:600                //размер окна для контента
    });

    infowindow.open(map, marker);

    /*надпись над знаком по клику
    marker.addListener('click',function () {
        infowindow.open(map,marker);
    })
    */
}

$(function () {
    $("#map").hover(
        function () {
            $(this).css({
                border:"1px solid #1f7139",
                transition: "border .5s ease .2s",
            })
        },
        function () {
            $(this).css({
                border:"1px solid rgba(232, 102, 60,1)",
                transition: "border .3s ease .2s",
            })
        });
})