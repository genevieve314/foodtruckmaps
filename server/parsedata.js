module.exports = function(data){
  var result = [];
  var id = 0;

  for(var i=0 ; i<data.length ; i++){
    var truck = data[i];
// console.log('truck in parsedata: ', truck);
    var reformat = {
      coords: {latitude: truck.latitude, longitude: truck.longitude},
      idKey: id++,
      options: {title: truck.applicant}  
    };

    result.push(reformat);
  }
// console.log('reformat in parsedata: ', reformat);

  return result;
  //parse api data
  //return in form that can be rendered in client
  //example:  
        // idKey='{expression}'
        // coords= 'an object with latitude longitude properties'
        // click='an event handler that is called when a marker is clicked'
        // options='an object with options on it, such as label or icon'
        // events='{expression}'
        // control='{expression}'
}