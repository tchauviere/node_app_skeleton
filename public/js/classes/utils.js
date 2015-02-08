var Utils = {

   setCookie: function(cname, cvalue, exdays)
    {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },

    getCookie: function(cname)
    {
        var name = cname + "=";
        var ca = document.cookie.split(';');

        for(var i = 0; i < ca.length; i++)
        {
            var c = ca[i];

            while (c.charAt(0) == ' ')
                c = c.substring(1);

            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return false;
    },

    genUUID: function()
    {
        var uuid = "", i, random;
        for (i = 0; i < 32; i++)
        {
            random = Math.random() * 16 | 0;

            if (i == 8 || i == 12 || i == 16 || i == 20)
                uuid += "-"
            uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
    }

};
