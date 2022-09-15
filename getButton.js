// GetButton
(function () {

    var options = {

        whatsapp: "+7(967) 484-20-64", // WhatsApp number

        telegram: "+7(967) 484-20-64", // Telegram number

        // vkontakte: "golden_gloves_souvenir", // VKontakte page name

        call_to_action: "Отправьте нам сообщение", // Call to action

        button_color: "#FF318E", // Color of button

        position: "right", // Position may be 'right' or 'left'

        order: "whatsapp,telegram,vkontakte", // Order of buttons

    };

    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;

    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';

    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };

    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);

})();