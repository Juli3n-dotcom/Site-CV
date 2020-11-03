$(document).ready(function(){
    $(function(){
        $("#submit").click(function(e){
            e.preventDefault();
            var $form = $(this).closest('form');
            var nom = $form.find('input[name="nom"]').val();
            var email = $form.find('input[name="email"]').val();
            var subject = $form.find('input[name="subject"]').val();
            var message = $('#message').val();
            var parameters = "nom="+nom+"&email="+email+"&subject="+subject+"&message="+message;
            console.log(parameters)
            $.ajax({
                url:'assets/script/msg.php',
                method : 'post',
                data: parameters,
                dataType: 'JSON',
                success: function(data){
                   retour = $('#resultat').html(data.resultat);
                   return retour;
                }  
            });
            $form.trigger('reset');
        });
    });
})