function merhaba(){
   let ad,soyad,yas,takım;
   ad=document.getElementById("txtad").value;
   soyad=document.getElementById("txtsoyad").value;
   yas=document.getElementById("txtyas").value;
   takım=document.getElementById("lıstetakımlar").selectedIndex;
   document.getElementById("sonucbaslık").innerHTML="";
   console.log(takım); console.log(takım);
   if(takım==0){
      document.body.style.backgroundColor="red";
      yazı.innerHTML="TÜRKİYENİN MEGA ŞEHRİ"
      document.getElementById("resim").setAttribute("src","istanbul.gif")
   }
   else if(takım==1){
       document.body.style.backgroundColor="blue"
       yazı.innerHTML="TÜRKİYENİN KALBİ"
       document.getElementById("resim").setAttribute("src","ankara.gif")
    }
    else if(takım==2){
       document.body.style.backgroundColor="green";
       yazı.innerHTML="İZMİR İN YOLLARINDA ÇİCELER AÇAR"
       document.getElementById("resim").setAttribute("src","izmir.gif")

    }
    else if(takım==3){
       document.body.style.backgroundColor="orange";
        yazı.innerHTML="BİTLİS BEŞ MİNARESİ"
        document.getElementById("resim").setAttribute("src","bitlis.jpg")
    }
    else if(takım==4){
        document.body.style.backgroundColor="brown"
        yazı.innerHTML="VAN KEDİSİ"
        document.getElementById("resim").setAttribute("src","https://matillaatasever.files.wordpress.com/2012/05/van-kedisi-gif-video.gif")
   
   }
}