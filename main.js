function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aV13GYJB8/model.json', modelReady);

}
 function modelReady()
 {
    classifier.classify(gotResults);
 }

 function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1
        random_number_g = Math.floor(Math.random()*255)+1
        random_number_b = Math.floor(Math.random()*255)+1

        document.getElementById("result_label").innerHTML = 'I can hear : ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy : ' + (results[0].confidence*100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," +random_number_g + ","+random_number_b +")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," +random_number_g + ","+random_number_b +")";


        img = document.getElementById('img_main');

        if(results[0].label == "mooing")
        {
            img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7Pr68ISI16cSozzbQQNDyTBIVfZ50M-ExA&usqp=CAU';
        } else if(results[0].label == "barking")
        {
           img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OqJ5D7dbcRGLifCFGvxH8KGR_raXVzD3dw&usqp=CAU';
        }else if(results[0].label == "meowing")
        {
           img.src = 'https://clipart.info/images/ccovers/1522855946cat-png-cartoon.png';
        }else if(results[0].label == "roar")
        {
           img.src = 'https://cdn.freelogovectors.net/wp-content/uploads/2017/05/Lion-Png-Clipart-17.png';
        }else{
            img.src = 'https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
        }
        
    }
}