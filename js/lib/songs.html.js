define(["jquery", "bootstrap"], function(jQuery){
    return function(){
        var sUrl="http://localhost/phpworkspace/phpassetchain-master/public/api/Songs";
        jQuery.ajax({
            url: sUrl
        }).done(function(aSongs){
            for(var n=0; n<aSongs.length; n++){
                var oSong = aSongs[n];
                jQuery("#songlist").append("<tr><td>"+oSong.title+"</td><td>"+oSong.name+"</td></tr>");
            }
            //alert(aSongs);
        });

    };
});
