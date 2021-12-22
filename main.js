function stop1(){
    //画像ファイル名を配列で保持
    const image1 = [
        "images/hasuto_1.PNG",
        "images/koya_1.PNG",
        "images/rin_1.PNG",
        "images/takuma_1.PNG", 
        "images/ube_1.PNG", 
        "images/yoshiki_1.PNG",  
        "images/yusaku_1.PNG", 
        "images/yusaku2_1.PNG",
        "images/yuya_1.PNG"
    ];
    
    //ランダムで画像ファイルを取得して表示する
    let obj1 = document.getElementById("im1");
    let a1 = Math.floor(Math.random() * image1.length);
    obj1.src = image1[a1];
}

function stop2(){
    //画像ファイル名を配列で保持
    const image2 = [
        "images/hasuto_2.PNG",
        "images/koya_2.PNG",
        "images/rin_2.PNG",
        "images/takuma_2.PNG", 
        "images/ube_2.PNG", 
        "images/yoshiki_2.PNG",  
        "images/yusaku_2.PNG", 
        "images/yusaku2_2.PNG",
        "images/yuya_2.PNG"
    ];
    
    //ランダムで画像ファイルを取得して表示する
    let obj2 = document.getElementById("im2");
    let a2 = Math.floor(Math.random() * image2.length);
    obj2.src = image2[a2];
}

function stop3(){
    //画像ファイル名を配列で保持
    const image3 = [
        "images/hasuto_3.PNG",
        "images/koya_3.PNG",
        "images/rin_3.PNG",
        "images/takuma_3.PNG", 
        "images/ube_3.PNG", 
        "images/yoshiki_3.PNG",  
        "images/yusaku_3.PNG", 
        "images/yusaku2_3.PNG",
        "images/yuya_3.PNG"
    ];
    
    //ランダムで画像ファイルを取得して表示する
    let obj3 = document.getElementById("im3");
    let a3 = Math.floor(Math.random() * image3.length);
    obj3.src = image3[a3];
}


let DefaultHTML;
function DefaultSave() {
    DefaultHTML = document.body.innerHTML;
}
function reset(){
    document.body.innerHTML = DefaultHTML;
}