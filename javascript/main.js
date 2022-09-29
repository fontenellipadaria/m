$(document).ready(function () {

   var url = './data.json';

   $("#userphoto").html('<span><i class="fa-brands fa-youtube logo_ytb"></i></span>');
   
   $.getJSON(url, function (data) {
      //PROFILE
      $.each(data, function (i, user) {
         $(document).attr("title", this.Nome + " - " + this.Legenda);
         $('.username h1').append('@' + user.Username);
         $('.footer a b').append(user.Nome);
         $('.legenda').append(user.Legenda);
         $('.texto_bio').append(user.Texto_Bio);
         $(':root').css("--themecolor", user.Cor_Principal);

      //MIDIAS
         $("#userphoto").css('background-image', 'url(' + this.Foto_Perfil + ')').attr('alt', this.Nome_Foto_Perfil);
         //PUB
         $('.titulo-pub').append(this.Titulo_Da_Pub);
         //YOUTUBE ---> zVXoee6N5lQ
         $("#ytb").attr('src', "https://www.youtube-nocookie.com/embed/" + this.Video_Youtube + '?autoplay=1');
         if (this.Video_Youtube == '') {
            $(".ratio-16x9").remove();
            $(".logo_ytb").addClass('hidden');
         };
         //TIKTOK ---> 7101228587403054337
         $(".tiktok-embed").attr('data-video-id', this.Video_Tiktok);
         if (this.Video_Tiktok == '') {
            $(".tiktok-embed").remove();
         }
         else {
            $("#userphoto").html('<span><i class="fa-brands fa-youtube logo_ytb"></i></span>');
         };
         //PUB BANNER
         $(".pub-img").attr('src', this.Banner).attr('alt', this.Nome_banner);
         if (this.Banner == '') {
            $(".pub-img").remove();
         };
         //PUB TEXTO
         $('.pub-texto').append(this.Texto_Da_Pub);
         if (this.Texto_Da_Pub == '') {
            $(".pub-texto").remove();
         };
         //PUB LINK
         $(".pub-link").attr('href', this.Link_Pub);
         if (this.Link_Pub == '') {
            $("#VideoModal1").remove();
            $(".pub").remove();
            $(".logo_ytb").addClass('hidden');
         };
      //BOTÃO ESPECIAL PERSONALIZÁVEL (PROMOÇÔES)
         $(".button-especial").html('<i class=" ' + this.Icone_Botao_Especial + ' "></i>');
         $(".button-especial").append(' ' + this.Texto_Botao_Especial);
         $(".button-especial").css("--btn-especial", this.Cor_Texto_Botao_Especial);
         $(".button-especial").css("background", this.Cor_Botao_Especial);
         $(".button-especial").attr("href", this.Link_Botao_Especial);
      //BOTÃO EXCLUSIVO PARA COMPRAS
         $(".button-comprar").html('<i class=" ' + this.Icone_Botao_Comprar + ' "></i>' + '&nbsp;');
         $(".button-comprar").append(this.Nome_Botao_Comprar);
         $(".button-comprar").attr("href", this.Link_Botao_Comprar);
      //BOTÕES EXTRAS
         $(".button-extra01").html('<i class=" ' + this.Icone_Botao_Extra_01 + ' "></i>' + '&nbsp;');
         $(".button-extra01").append(this.Nome_Botao_Extra_01);
         $(".button-extra01").attr("href", this.Link_Botao_Extra_01);
         $(".button-extra02").html('<i class=" ' + this.Icone_Botao_Extra_02 + ' "></i>' + '&nbsp;');
         $(".button-extra02").append(this.Nome_Botao_Extra_02);
         $(".button-extra02").attr("href", this.Link_Botao_Extra_02);
         $(".button-extra03").html('<i class=" ' + this.Icone_Botao_Extra_03 + ' "></i>' + '&nbsp;');
         $(".button-extra03").append(this.Nome_Botao_Extra_03);
         $(".button-extra03").attr("href", this.Link_Botao_Extra_03);
      //MIDIAS SOCIAIS (LINKS)
         $(".button-youtube").attr("href", this.Youtube);
         $(".button-tiktok").attr("href", this.Tiktok);
         $(".button-instagram").attr("href", this.Instagram);
         $(".button-facebook").attr("href", this.Facebook);
         $(".button-twitch").attr("href", this.Twitch);
         $(".button-twitter").attr("href", this.Twitter);
         $(".button-pinterest").attr("href", this.Pinterest);
         $(".button-kwai").attr("href", this.Kwai);
         $(".button-snapchat").attr("href", this.Snapchat);
         $(".button-reddit").attr("href", this.Reddit);
         $(".button-linkedin").attr("href", this.Linkedin);
         $(".button-discord").attr("href", this.Discord);
         $(".button-github").attr("href", this.Github);
         $(".button-whatsapp").attr("href", this.Whatsapp);
         $(".button-telegram").attr("href", this.Telegram);
         $(".button-endereco").attr("href", this.Endereco);
         $(".link[href='']").remove();

      });

   }).fail(function () {
      alert('error')
   });

});



