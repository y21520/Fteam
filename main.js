function start(){
    //画像ファイル名を配列で保持
    const image1 = [
        //画像
    ];

    const image2 = [
        //画像
    ];

    const image3 = [
        //画像
    ];
 
    //ランダムで画像ファイルを取得して表示する
    function stop1(){
        let obj1 = document.getElementById("/*画像表示のid*/");
        let a1 = Math.floor(Math.random() * image1.length);
        obj1.src = image1[a1];
    }
    stop1();

    function stop2(){
        let obj2 = document.getElementById("/*画像表示のid*/");
        let a2 = Math.floor(Math.random() * image2.length);
        obj2.src = image2[a2];
    }
    stop2();

    function stop3(){
        let obj3 = document.getElementById("/*画像表示のid*/");
        let a3 = Math.floor(Math.random() * image3.length);
        obj3.src = image3[a3];
    }
    stop3();
}