(function ($) {
    $.fn.validatePassword = function (options) {
        return this.each(function () {

            var entropia = Math.log2(74); // 32 * 2 + 10
            var entropiaPass = $(this).val().length;
            $(this).next().html("Entropia wyniosi:   " + entropia * entropiaPass);

            if (options.pattern.test($(this).val()) === true) {
                $(this).addClass("good");
            }
            else {
                $(this).addClass("error");

            }
        });
    };
    $.fn.validateZipCode = function (options) {
        return this.each(function () {

            var self = $(this);

            $.getJSON("kody.json", function (data) {
                var pass = false;
                for (var i = 0; i < data.length; i++) {
                    if (data[i]["KOD POCZTOWY"] === $(self).val()) {
                        $(self).next().html(data[i]["MIEJSCOWOŚĆ"]);
                        pass = true;
                    }
                }
				
                if (options.pattern.test($(self).val()) === true && pass === true) {
                    $(self).addClass("good");
                }
                else {
                    $(self).addClass("error");
                }
            });
        });
    };
    $.fn.validate = function (options) {
        return this.each(function () {
            if (options.pattern.test($(this).val()) === true) {
                $(this).addClass("good");
            }
            else {
                $(this).addClass("error");

            }

        });
    };
})(jQuery);
