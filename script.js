const drawing = document.getElementById('canvas');

let ctx;


// déclaration du canvas
if(drawing.getContext){
    ctx = drawing.getContext('2d');
    for (let j = 0 ; j < 8; j++){
        if(j % 2 === 0) {
            for(let i = 0; i < 8; i++){
                if(i % 2 === 0){
                    ctx.fillRect(i * 30, j * 30, 30, 30);
                }
            }
        }
    }
} else {
    for(let i = 0; i < 8; i++) {
        if(i % 2 != 0){
            ctx.fillRect(i * 30, j * 30, 30, 30);
        }
    }
}
//clearRect(x, y, width, height)

