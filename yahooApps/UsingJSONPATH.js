        var util = require('util');
        var mongojs = require('mongojs');
        var db = mongojs('mongodb://localhost:1227/myDB', ['URLDetails']);

//URLDetails contains: id, url and status (true->image is fine, false ->image is not per standards)
        

        function checkValues(){

            db.URLDetails.runCommand('count', {query: {status: null}}, function(err, res) {

                
             


             if(res.n < 1){

                db.UserDetails.insert({id: f_id, status: f_name}, function(err, docs){
                    if(!err) { console.log('A new document was inserted')};
                });

             }
            });
           }

        function InsertCampaigns(arguments, postID){

            console.log('postID: ' + postID.id);
            console.log('CampPost: ' + arguments.body.campPost);
            console.log('CampName ' + arguments.body.campName);
            console.log('campType: ' + arguments.body.campType);
            console.log('platformType: ' + arguments.body.platformType);
            console.log('UserID:' + arguments.cookies.UserIdCookie);

            var f_UserId = arguments.cookies.UserIdCookie;
            var f_postId = postID.id;
            var f_campPost = arguments.body.campPost;
            var f_campName = arguments.body.campName;
            var f_campType = arguments.body.campType;
            var f_platformType = arguments.body.platformType;
            
            db.CampaignDetails.runCommand('count', {query: {postid: f_postId}}, function(err, res){
                console.log(res.n);
                if(res.n < 1){
                    db.CampaignDetails.insert({id: f_UserId, postid: f_postId, campName: f_campName,
                    campType: f_campType, platform: f_platformType,
                    campPost: f_campPost, likes: 0}, function(err, docs){
                            if(!err){ console.log('A new campaign was inserted')};
                        });
                };
            });
        }

   function checkIfValid(value, key){

    var request = http.get(key, function (response) {
    imagesize(response, function (err, result) {
    
    if(result){
      if(result.width == 100 && result.height == 100)
      {
        console.log('logo with url:', key + ' is valid');
        map.set(key, 1);
      } 
    }   
    });
  
  });

}
