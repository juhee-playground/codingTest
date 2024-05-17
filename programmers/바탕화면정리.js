function solution(wallpaper) {
    let xArr = [];
    let yArr = [];
    for(let i = 0; i < wallpaper.length; i++) {
        const lux = wallpaper[i].indexOf("#");
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j]=== "#") {
                xArr.push(i);
                yArr.push(j);
            }
        }
    }
    let lastIndex = xArr.length-1;
    xArr.sort((a,b) => a-b);
    yArr.sort((a,b) => a-b);
    return [xArr[0], yArr[0], xArr[lastIndex] +1, yArr[lastIndex] +1];
}