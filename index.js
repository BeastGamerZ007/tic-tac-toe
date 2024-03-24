let flag=0;
let namep1="";
let namep2="";
let r=document.querySelector(".result");
let res=false;
document.querySelector(".enterp1").addEventListener("click",getname1);
document.querySelector(".enterp2").addEventListener("click",getname2);
let p1=document.querySelector(".p1");
let p2=document.querySelector(".p2");
function getname1()
{
    namep1=p1.value;
    document.querySelector(".name1").innerHTML="Player 1 : "+namep1;
}
function getname2()
{
    namep2=p2.value;
    document.querySelector(".name2").innerHTML="Player 2 : "+namep2;
}
function display(val)
{
    let a=document.querySelector("#"+val);
    r.innerHTML="";
    if(flag===0 && a.innerHTML=="" && res===false)
    {
        a.innerHTML="X";
        flag=1
    }
    else if(flag===1 && a.innerHTML=="" && res===false)
    {
        a.innerHTML="O";
        flag=0;
    }
}
function reset()
{
    for(let i=1;i<10;i++)
    {
        let a=document.querySelector("#btn"+i);
        a.innerHTML="";
    }
    r.innerHTML="";
    flag=0;
    res=false;
}
function playagain()
{
    let f=0;
    for(let i=1;i<10;i++)
    {
        let a=document.querySelector("#btn"+i);
        if(a.innerHTML!=="")
        {
            f++;
        }
    }
    if(f===9 || res===true)
    {
        reset();
        r.innerHTML="";
        flag=0;
        res=false;
    }
    else
    {
        if(res!==true)
        r.innerHTML="Complete this Game First !";
    }
}
function result()
{
    for(let i=1;i<10;i+=3)
    {
        if(document.querySelector("#btn"+i).innerHTML==="X" && document.querySelector("#btn"+(i+1)).innerHTML==="X" && document.querySelector("#btn"+(i+2)).innerHTML==="X")
        {
            res=true;
            r.innerHTML="Congratulations "+namep1+" !<br>You just beat "+namep2+" !";
        }
        else if(document.querySelector("#btn"+i).innerHTML==="O" && document.querySelector("#btn"+(i+1)).innerHTML==="O" && document.querySelector("#btn"+(i+2)).innerHTML==="O")
        {
            res=true;
            r.innerHTML="Congratulations "+namep2+" !<br>You just beat "+namep1+" !";
        }
    }
    for(let i=1;i<4;i++)
    {
        if(document.querySelector("#btn"+i).innerHTML==="X" && document.querySelector("#btn"+(i+3)).innerHTML==="X" && document.querySelector("#btn"+(i+6)).innerHTML==="X")
        {
            res=true;
            r.innerHTML="Congratulations "+namep1+" !<br>You just beat "+namep2+" !";
        }
        else if(document.querySelector("#btn"+i).innerHTML==="O" && document.querySelector("#btn"+(i+3)).innerHTML==="O" && document.querySelector("#btn"+(i+6)).innerHTML==="O")
        {
            res=true;
            r.innerHTML="Congratulations "+namep2+" !<br>You just beat "+namep1+" !";
        }
    }
    if(document.querySelector("#btn1").innerHTML==="X" && document.querySelector("#btn5").innerHTML==="X" && document.querySelector("#btn9").innerHTML==="X")
    {
        res=true;
        r.innerHTML="Congratulations "+namep1+" !<br>You just beat "+namep2+" !";
    }
    else if(document.querySelector("#btn1").innerHTML==="O" && document.querySelector("#btn5").innerHTML==="O" && document.querySelector("#btn9").innerHTML==="O")
    {
        res=true;
        r.innerHTML="Congratulations "+namep2+" !<br>You just beat "+namep1+" !";
    }
    else if(document.querySelector("#btn3").innerHTML==="X" && document.querySelector("#btn5").innerHTML==="X" && document.querySelector("#btn7").innerHTML==="X")
    {
        res=true;
        r.innerHTML="Congratulations "+namep1+" !<br>You just beat "+namep2+" !";
    }
    else if(document.querySelector("#btn3").innerHTML==="O" && document.querySelector("#btn5").innerHTML==="O" && document.querySelector("#btn7").innerHTML==="O")
    {
        res=true;
        r.innerHTML="Congratulations "+namep2+" !<br>You just beat "+namep1+" !";
    }
    else if(document.querySelector("#btn1").innerHTML!="" && document.querySelector("#btn2").innerHTML!="" && document.querySelector("#btn3").innerHTML!="" && document.querySelector("#btn4").innerHTML!="" && document.querySelector("#btn5").innerHTML!="" && document.querySelector("#btn6").innerHTML!="" && document.querySelector("#btn7").innerHTML!="" && document.querySelector("#btn8").innerHTML!="" && document.querySelector("#btn9").innerHTML!="")
    {
        res=true;
        r.innerHTML="It's a Draw !";
    }
}

