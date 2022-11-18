var cook;       //cookieデータを格納する変数
var cStart,cEnd;  //訪問回数部分を切取る為の位置を格納
var cnt;        //訪問回数を格納

// github

const b0=document.getElementById('btn0');
const b1=document.getElementById('btn1');
const b2=document.getElementById('btn2');
const b3=document.getElementById('btn3');
const b4=document.getElementById('btn4');
const b5=document.getElementById('btn5');
const b6=document.getElementById('btn6');
const b7=document.getElementById('btn7');
const b8=document.getElementById('btn8');
const b9=document.getElementById('btn9');

//＋のボタン
const bp=document.getElementById('btnp');
bp.disabled = false;   

//-のボタン
const bm=document.getElementById('btnm');
bm.disabled = false;

// /のボタン
const bs=document.getElementById('btns');
bs.disabled = false; 

// *のボタン
const bk=document.getElementById('btnk');
bk.disabled = false; 

// =のボタン
const be=document.getElementById('btne');
const bc=document.getElementById('btnc');

// ±のボタン
const bpm=document.getElementById('btnpm');

// .(小数点)のボタン
const bd=document.getElementById('btnd');

// 消費税のボタン
const bt=document.getElementById('btntax');

// 分数のボタン
//const bf=document.getElementById('btnf');

// ←のボタン
const ba=document.getElementById('btna');

// 00のボタン
const b00=document.getElementById('btn00');

// 自然対数,常用対数
const bln=document.getElementById('btnln');
const blog=document.getElementById('btnlog');

// べき乗
const bkk=document.getElementById('btnkk');
bkk.disabled = false; 

var ans=0;

var n=0;

// array[1]に最初に設定した値
//array[0]に後に設定した値を格納
var array = [0,0];

// 何の演算かを判定する変数
// 1が+,2が-,3が*,4が/, 5がべき乗
var fao=0; 

// 1のボタン,テキスト計算
b1.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=1;
        array[0]=1;
    }
    else{
        document.getElementById('ans').value=numl+1;

        array[0]=parseFloat(numl+1);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

b2.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=2;
        array[0]=2;
    }
    else{
        document.getElementById('ans').value=numl+2;
        array[0]=parseFloat(numl+2);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

b3.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=3;
        array[0]=3;
    }
    else{
        document.getElementById('ans').value=numl+3;
        array[0]=parseFloat(numl+3);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

// テキスト計算
b4.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=4;
        array[0]=4;
    }
    else{
        document.getElementById('ans').value=numl+4;

        array[0]=parseFloat(numl+4);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

// テキスト計算
b5.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=5;
        array[0]=5;
    }
    else{
        document.getElementById('ans').value=numl+5;

        array[0]=parseFloat(numl+5);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

// テキスト計算
b6.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=6;
        array[0]=6;
    }
    else{
        document.getElementById('ans').value=numl+6;

        array[0]=parseFloat(numl+6);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

// テキスト計算
b7.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=7;
        array[0]=7;
    }
    else{
        document.getElementById('ans').value=numl+7;

        array[0]=parseFloat(numl+7);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

// テキスト計算
b8.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=8;
        array[0]=8;
    }
    else{
        document.getElementById('ans').value=numl+8;

        array[0]=parseFloat(numl+8);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

// テキスト計算
b9.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=9;
        array[0]=9;
    }
    else{
        document.getElementById('ans').value=numl+9;

        array[0]=parseFloat(numl+9);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

b0.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    if(numl=="0"){
        document.getElementById('ans').value=0;
        array[0]=0;
    }
    else{
        document.getElementById('ans').value=numl+0;
        array[0]=parseFloat(numl+0);
        console.log(array,"array");
    }

    document.cookie="number="+array[n]+";";
}

// テキスト計算
b00.onclick=function(){
    // ±を押せる様にする
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    var numl=document.getElementById('ans').value;
    
    var ch=".";

    var count=numl.split(ch).length-1;

    if(count==1){
        document.getElementById('ans').value=numl+0+0;

        array[0]=parseFloat(numl+0+0);
        console.log(array,"array");        
    }
    else{
        if(numl==0){
            //console.log(document.getElementById('ans').value);
            document.getElementById('ans').value=0;
            array[0]=0;
        }
        else{
            //console.log(document.getElementById('ans').value);
            document.getElementById('ans').value=numl+0+0;
            array[0]=parseFloat(numl+0+0);
            console.log(array,"array");
        }

    }

    document.cookie="number="+array[n]+";";
}

// +のボタン
bp.onclick = function(){

    n=1;

    // ±を押せない
    bpm.disabled=true;
    bd.disabled=true;
    bt.disabled=true;
    bln.disabled=true;
    blog.disabled=true;

    var numl=document.getElementById('ans').value;

    // 空欄の時にnum=0
    if(numl==""){
        var num=0;
        //console.log(1,"空欄");
    }
    else{
        // それ以外の時はテキストの値
        var num=parseFloat(document.getElementById('ans').value);
        //console.log(2,"テキストに何か数字");
    }
    
    // array[0]を初期化
    array[0]=0;
    array[1]=num;
    fao=1;

    document.getElementById('ans').value="";

    console.log(fao,array,array[1],"fao,array,array[1]");

    bp.disabled=true;
    bm.disabled=true;
    bs.disabled=true;
    bk.disabled=true;
    bkk.disabled=true;
    be.disabled=false;
}

// -のボタン
bm.onclick = function(){
    n=1;

    // ±を押せない
    bpm.disabled=true;
    bd.disabled=true;
    bt.disabled=true;
    bln.disabled=true;
    blog.disabled=true;

    var numl=document.getElementById('ans').value;

    // 空欄の時にnum=0
    if(numl==""){
        var num=0;
        //console.log(1,"空欄");
    }
    else{
        // それ以外の時はテキストの値
        var num=parseFloat(document.getElementById('ans').value);
        //console.log(2,"テキストに何か数字");
    }
    
    // array[0]を初期化
    array[0]=0;
    array[1]=num;
    fao=2;

    document.getElementById('ans').value="";

    console.log(fao,array,array[1],"fao,array,array[1]");

    bp.disabled=true;
    bm.disabled=true;
    bs.disabled=true;
    bk.disabled=true;
    bkk.disabled=true;
    be.disabled=false;
}

// *のボタン
bk.onclick = function(){
    n=1;

    // ±を押せない
    bpm.disabled=true;
    bd.disabled=true;
    bt.disabled=true;
    bln.disabled=true;
    blog.disabled=true;


    var numl=document.getElementById('ans').value;

    // 空欄の時にnum=0
    if(numl==""){
        var num=0;
        //console.log(1,"空欄");
    }
    else{
        // それ以外の時はテキストの値
        var num=parseFloat(document.getElementById('ans').value);
        //console.log(2,"テキストに何か数字");
    }
    
    // array[0]を初期化
    array[0]=0;
    array[1]=num;
    fao=3;

    document.getElementById('ans').value="";

    console.log(fao,array,array[1],"fao,array,array[1]");

    bp.disabled=true;
    bm.disabled=true;
    bs.disabled=true;
    bk.disabled=true;
    bkk.disabled=true;
    be.disabled=false;
}

be.onclick = function(){
    n=0;

    // ±を押せる
    bpm.disabled=false;
    bd.disabled=false;
    bt.disabled=false;
    bln.disabled=false;
    blog.disabled=false;

    a=document.getElementById('ans').value;
    if(a!=""){
        if(fao==2){
            var ans1=array[1]-array[0];
            console.log(ans1,array,"ans1,array,-の場合");
        
            array[0]=ans1;
            array[1]=0;
            document.getElementById('ans').value=ans1;
            console.log(array,"array,-の場合");

            //四則演算の判定の変数を初期化
            fao=0;
    
            // 全部のボタンをfalseに戻す
            bp.disabled=false;
            bm.disabled=false;
            bs.disabled=false;
            bk.disabled=false;
            bkk.disabled=false;

            // イコールを押せなくする
            be.disabled = true;   
        }

        if(fao==3){
            var ans1=array[1]*array[0];
            console.log(ans1,array,"ans1,array,*の場合");
        
            array[0]=ans1;
            array[1]=0;
            document.getElementById('ans').value=ans1;
            console.log(array,"array,*の場合");

            //四則演算の判定の変数を初期化
            fao=0;
    
            // 全部のボタンをfalseに戻す
            bp.disabled=false;
            bm.disabled=false;
            bs.disabled=false;
            bk.disabled=false;
            bkk.disabled=false;

            // イコールを押せなくする
            be.disabled = true;

        }

        if(fao==5){
            var ans1=(array[1])**(array[0]);
            console.log(ans1,array,"ans1,array,*の場合");
        
            array[0]=ans1;
            array[1]=0;
            document.getElementById('ans').value=ans1;
            console.log(array,"array,*の場合");

            //四則演算の判定の変数を初期化
            fao=0;
    
            // 全部のボタンをfalseに戻す
            bp.disabled=false;
            bm.disabled=false;
            bs.disabled=false;
            bk.disabled=false;
            bkk.disabled=false;

            // イコールを押せなくする
            be.disabled = true;

        }

        if(fao==4){
            if(array[0]==0){
                alert("0では割れない");
            }
            else{
                var ans1=array[1]/array[0];
                console.log(ans1,array,"ans1,array,/の場合"); 
                
                array[0]=ans1;
                array[1]=0;
                document.getElementById('ans').value=ans1;
                console.log(array,"array,/の場合");

                //四則演算の判定の変数を初期化
                fao=0;
    
                // 全部のボタンをfalseに戻す
                bp.disabled=false;
                bm.disabled=false;
                bs.disabled=false;
                bk.disabled=false;
                bkk.disabled=false;

                // イコールを押せなくする
                be.disabled = true;
                //bf.disabled=true;
            }

        }

        if(fao==1){
            var ans1=array[0]+array[1];
            console.log(ans1,array,"ans1,array,+の場合");
        
            array[0]=ans1;
            array[1]=0;
            document.getElementById('ans').value=ans1;
            console.log(array,"array,+の場合");

            //四則演算の判定の変数を初期化
            fao=0;
    
            // 全部のボタンをfalseに戻す
            bp.disabled=false;
            bm.disabled=false;
            bs.disabled=false;
            bk.disabled=false;
            bkk.disabled=false;

            // イコールを押せなくする
            be.disabled = true;   
        }

        document.cookie="number="+array[n]+";";
    }
    else{
        console.log("空欄")
    }
}

bc.onclick=function(){
    n=0;

    // ±を押せない
    bpm.disabled=true;
    bd.disabled=true;
    bt.disabled=true;
    bln.disabled=true;
    blog.disabled=true;


    if(fao>0){
        array[0]=array[1];
        array[1]=0;
        document.getElementById('ans').value=array[0];

        //全てのボタンをfalseに戻す
        bp.disabled=false;
        bm.disabled=false;
        bs.disabled=false;
        bk.disabled=false;
        bkk.disabled=false;
        console.log(array,"クリアボタン");

        //イコールを押せなくする
        be.disabled = true;  
    }
    else{
        array[0]=0;
        document.getElementById('ans').value="";
        console.log(array,"クリアボタン2");
    }

    document.cookie="number="+array[n]+";";
}

bpm.onclick=function(){
    var numl=document.getElementById('ans').value;

    bd.disabled=false;

    if(numl!=""){
        var num=parseFloat(document.getElementById('ans').value);

        num*=-1;

        array[0]=num;

        document.getElementById('ans').value=num;

        document.cookie="number="+array[n]+";";
    }
}

// /ボタン
bs.onclick=function(){
    n=1;

    // ±を押せない
    bpm.disabled=true;
    bd.disabled=true;
    bt.disabled=true;
    bln.disabled=true;
    blog.disabled=true;


    var numl=document.getElementById('ans').value;

    // 空欄の時にnum=0
    if(numl==""){
        var num=0;
        //console.log(1,"空欄");
    }
    else{
        // それ以外の時はテキストの値
        var num=parseFloat(document.getElementById('ans').value);
        //console.log(2,"テキストに何か数字");
    }

    // array[0]を初期化
    array[0]=0;
    array[1]=num;
    fao=4;

    document.getElementById('ans').value="";

    console.log(fao,array,array[1],"fao,array,array[1]");

    bp.disabled=true;
    bm.disabled=true;
    bs.disabled=true;
    bk.disabled=true;
    bkk.disabled=true;
    be.disabled=false;
    //bf.disabled=false;
}

bd.onclick=function(){

    var numl=document.getElementById('ans').value;

    var ch=".";

    var count=numl.split(ch).length-1;

    if(count==0){
        document.getElementById('ans').value=numl+".";
        array[0]=parseFloat(numl);
        console.log(array,"array");
        bd.disabled=true;
    }
    else{
        console.log("既に小数点がある");
    }

    document.cookie="number="+array[n]+";";
}

bt.onclick=function(){

    var num=document.getElementById('ans').value;

    num=Math.ceil((1.1)*Math.abs(parseFloat(num)));

    array[0]=num;

    document.getElementById('ans').value=num;

    document.cookie="number="+array[n]+";";
}
/*
bf.onclick=function(){

    // 最大公約数
    a=gcd(array[0],array[1]);
    a0=array[0]/a;
    a1=array[1]/a;
    
    console.log(a);

    var ch=".";

    var count=String(a).split(ch).length-1;

    if(count==1){
        alert("このボタンは整数しか使えないです");
    }
    else{        
        if(a0==0){
            alert("0では割れない");
        }
        else{
            if((a1/a0)<0){
                alert("-"+Math.abs(a1)+"/"+Math.abs(a0));
            }
            else{
                alert(a1+"/"+a0);
            }  
        }

    }
}


function gcd (x, y){
    if(x % y){
      return gcd(y, x % y)
    }else{
      return y
    }
}
*/

bln.onclick=function(){
    var num=document.getElementById('ans').value;

    num=parseFloat(num);

    if(num<0){
        alert("真数は0より大きい値にしてください");
    }
    else{
        num=Math.log(num);
        array[0]=num;
        document.getElementById('ans').value=num;
    }

    document.cookie="number="+array[n]+";";
}

blog.onclick=function(){
    var num=document.getElementById('ans').value;

    num=parseFloat(num);

    if(num<0){
        alert("真数は0より大きい値にしてください");
    }
    else{
        num=Math.log10(num);
        array[0]=num;
        document.getElementById('ans').value=num;
    }

    document.cookie="number="+array[n]+";";
}

// *のボタン
bkk.onclick = function(){
    n=1;

    // ±を押せない
    bpm.disabled=true;
    bd.disabled=true;
    bt.disabled=true;
    bln.disabled=true;
    blog.disabled=true;

    var numl=document.getElementById('ans').value;

    // 空欄の時にnum=0
    if(numl==""){
        var num=0;
        //console.log(1,"空欄");
    }
    else{
        // それ以外の時はテキストの値
        var num=parseFloat(document.getElementById('ans').value);
        //console.log(2,"テキストに何か数字");
    }
    
    // array[0]を初期化
    array[0]=0;
    array[1]=num;
    fao=5;

    document.getElementById('ans').value="";

    console.log(fao,array,array[1],"fao,array,array[1]");

    bp.disabled=true;
    bm.disabled=true;
    bs.disabled=true;
    bk.disabled=true;
    bkk.disabled=true;
    be.disabled=false;

    document.cookie="number="+array[n]+";";
}

window.onload = function() {

    if (navigator.cookieEnabled){
        cook=document.cookie + ";";  //変数cookにcookieデータを入れる
        
        //変数cStartにカウントデータの最初の位置を入れる
        cStart = cook.indexOf("number=",0);
        
        //データの有無で分岐
        if (cStart == -1)
        {
          //データの無い場合は最初の訪問ということ
          console.log("1回目の訪問です！");
      
        }
        else
        {
          //カウントデータの最後の部分「;」の位置を取得
          cEnd=cook.indexOf(";",cStart);
          
          //数値の部分だけを切り取る
          cnt=cook.substring(cStart+7,cEnd);
          
          //数値に変換できない例外が出た時の処理
          try
          {
            cnt=parseFloat(cnt);
            //console.log(result[cnt][0],"がメインキャラです。");
            
            //cookieに書き込む
            document.cookie="number="+cnt+";";

            document.getElementById('ans').value=cnt;

            array[0]=cnt;
          }
          catch(e)
          {
            console.log("cookieの取得に失敗しました。");
          }
        }
      }
      else
      {
        //cookieが使用できない時の処理
       console.log("cookieが使用できません。");
      }
}

ba.onclick = function(){

    var numl=document.getElementById('ans').value;

    numl=numl.slice(0,-1);

    console.log(numl);

    array[0]=parseFloat(numl);

    document.getElementById('ans').value=numl;

    document.cookie="number="+array[n]+";";

}