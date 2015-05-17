(function ($) {

    $.fn.validate = function (options) {
        return this.each(function () {
            var entropia = Math.log2(74); // 32 * 2 + 10
            var entropiaPass = $("#haslo").val().length;
            $("#entropia").text("Entropia wyniosi:   " + entropia * entropiaPass);

            if (options.pattern.test($(this).val()) === true) {
                if (entropia * entropiaPass > 50) {

                    $(this).addClass("good");
                }
            }
            else {
                $(this).addClass("error");

            }
        });
    };
})(jQuery);
