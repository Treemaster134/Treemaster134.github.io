function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GetIntersect(x1, y1, w1, h1, x2, y2, w2, h2)
{
    var xCords1 = [];
    var xCords2 = [];

    var yCords1 = [];
    var yCords2 = [];
    

    var xIntersects = false;
    var yIntersects = false;

    for(var i = 0; i < w1; i++)
    {
        xCords1.push(Math.round(x1 + i));
    }
    
    for(var i = 0; i < w2; i++)
    {
        xCords2.push(Math.round(x2 + i));
    }

    for(var i = 0; i < h1; i++)
    {
        yCords1.push(Math.round(y1 + i));
    }
    
    for(var i = 0; i < h2; i++)
    {
        yCords2.push(Math.round(y2 + i));
    }

    for(var i = 0; i < xCords1.length; i++)
    {
        if(xCords1.includes(xCords2[i]))
        {
            xIntersects = true;
        }
    }

    for(var i = 0; i < yCords1.length; i++)
    {
        if(yCords1.includes(yCords2[i]))
        {
            xIntersects = true;
        }
    }


    if(xIntersects === true && yIntersects === true)
    {
        return true;
    }
    else
    {
        return false;
    }

}


function drawStroked(text, x, y) {
    ctx.textAlign = "center";
    ctx.font = '40px Sans-serif';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y);
}

function drawButton(x, y, w, h, fC, sC, tC, text, size)
{
    
    ctx.fillStyle = fC;
    ctx.strokeStyle = sC;
    ctx.rect(x - w/2, y, w, h);
    ctx.fill();
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillStyle = tC;
    ctx.font = ctx.font.replace(/\d+px/, size + "px");
    ctx.fillText(text, x, y);
}

