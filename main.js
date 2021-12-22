function stop1(){
    //画像ファイル名を配列で保持
    const image1 = [
        "images/ube_1.PNG", 
        "images/hasuto_1.PNG", 
        "images/yusaku_1.PNG", 
        "images/takuma_1.PNG", 
        "images/yusaku2_1.PNG"
    ];
    
    //ランダムで画像ファイルを取得して表示する
    let obj1 = document.getElementById("im1");
    let a1 = Math.floor(Math.random() * image1.length);
    obj1.src = image1[a1];
}

function stop2(){
    //画像ファイル名を配列で保持
    const image2 = [
        //画像
    ];
    
    //ランダムで画像ファイルを取得して表示する
    let obj2 = document.getElementById("/*画像表示のid*/");
    let a2 = Math.floor(Math.random() * image2.length);
    obj2.src = image2[a2];
}

function stop3(){
    //画像ファイル名を配列で保持
    const image3 = [
        //画像
    ];
    
    //ランダムで画像ファイルを取得して表示する
    let obj3 = document.getElementById("/*画像表示のid*/");
    let a3 = Math.floor(Math.random() * image3.length);
    obj3.src = image3[a3];
}

function reset(){
    obj1.reset();
    obj2.reset();
    obj3.reset();
}