function move2D(x, y, blockSelector) {
    const distance = 100;

    const positionX = document.getElementById(blockSelector).style.left;
    const positionY = document.getElementById(blockSelector).style.top;

    if(!positionY) {
        document.getElementById(blockSelector).style.top = '0px';
    }

    if(!positionX) {
        document.getElementById(blockSelector).style.left = '0px';
    }

    let blockPosX =  parseInt(positionX.split('px')[0]);
    let blockPosY = parseInt(positionY.split('px')[0]);

    var newXPosition = blockPosX + distance * x;
    var newYPosition = blockPosY + distance * y;

    if (newXPosition < 0 || newYPosition < 0) {
        return;
    }

    blockPosX += distance * x;
    blockPosY += distance * y;

    document.getElementById(blockSelector).style.top = blockPosY + "px";
    document.getElementById(blockSelector).style.left = blockPosX + "px";
}
