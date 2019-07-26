document.write("問１"+"<br>");
for(var a=1; a<=5; a++){
    document.write("★");
}

document.write("<br>"+"<br>")
document.write("問２"+"<br>");
for(var b=1; b<4; b++){
    document.write("★");
}
document.write("<br>")
for(var c=1; c<=3; c++){
    document.write("★");
}

document.write("<br><br>");
document.write("問３"+"<br>");
for(var d=1; d<=2; d++){
    for(var e=1; e<=5; e++){
        document.write("☆");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("問４"+"<br>");
for(var ab=1; ab<=4; ab++){
    for(var ac=1; ac<=5; ac++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("問５"+"<br>");
for(var bc=1; bc<=4; bc++){
    for(var bb=1; bb<=3; bb++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("問６"+"<br>");
for(var cc=1; cc<=3; cc++){
    for(var cd=1; cd<=3; cd++){
        if(cd%2==0){
            document.write("☆");
        }else{
            document.write("★");
        }
    }
    document.write("<br>")
}

document.write("<br>");
document.write("問７"+"<br>");
for(var dd=1; dd<=4; dd++){
    for(var dc=1; dc<=5; dc++){
        if(dc%2==0){
            document.write("☆");
        }else{
            document.write("★");
        }
    }document.write("<br>")
}

document.write("<br>");
document.write("問８"+"<br>");
for(var gg=1; gg<=5; gg++){
    for(var gd=1; gd<=gg; gd++){
        document.write("★");
    }document.write("<br>")
}

document.write("<br><br>");
document.write("関数演習１"+"<br>");
function en(val){
    return val*val*3.14;
}
    document.write(en(5));
    document.write("<br>");
    document.write(en(7));
    document.write("<br>");
    document.write(en(10));

document.write("<br><br>");
document.write("関数演習２"+"<br>");
function money(adlut,children){
    return adlut*500+children*200+"円";
}
document.write(money(2,4));
document.write("<br>");
document.write(money(1,5));
document.write("<br>");
document.write(money(3,7));



