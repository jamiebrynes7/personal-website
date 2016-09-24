$(function(){ /* to make sure the script runs after page load */

    $('div.read_more_btn').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.project').find('.more_text').show(); /* show the .more_text span */
        $(this).parents('.project').find('.read_more_btn').hide();
    });

});
