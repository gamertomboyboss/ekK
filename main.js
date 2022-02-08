img = "";
status = "";
objects = [];

function setup()
{
    canvas = createCanvas(490,660);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function preload()
{
    img = loadImage('bottl.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if (status != "")
    {
    
        for( i = 0; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML = "status: detected objects";

            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult( error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}