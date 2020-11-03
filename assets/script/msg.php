<?php
if(empty($_POST['nom'])){
    $resultat='
        <div id="toats" class="notif" onload="killToats()">
            <div class="toats_header">
                <a class="toats_die">
                    <i class="icon ion-md-close"></i>
                </a>
                <h5>Notification :</h5>
            </div>
            <div class="toats_core">
                <p>
                Oups! il manque votre nom !
                </p>
            </div>
            
        </div>

        <script>
        const toats = document.querySelector(".notif");
        const close_toats = document.querySelector(".toats_die");
        close_toats.addEventListener("click", ()=>{
            toats.classList.add("hiden");
          });

        setTimeout(function(){ document.querySelector(".notif").classList.add("hiden");}, 3000 );
        </script>
        
        ';

        $tableau['resultat'] = $resultat;
    echo json_encode($tableau);

}elseif(empty($_POST['email'])){
    $resultat='
        <div id="toats" class="notif" onload="killToats()">
            <div class="toats_header">
                <a class="toats_die">
                    <i class="icon ion-md-close"></i>
                </a>
                <h5>Notification :</h5>
            </div>
            <div class="toats_core">
                <p>
                Oups! il manque votre email
                </p>
            </div>
            
        </div>

        <script>
        const toats = document.querySelector(".notif");
        const close_toats = document.querySelector(".toats_die");
        close_toats.addEventListener("click", ()=>{
            toats.classList.add("hiden");
          });

        setTimeout(function(){ document.querySelector(".notif").classList.add("hiden");}, 3000 );
        </script>
        
        ';

        $tableau['resultat'] = $resultat;
    echo json_encode($tableau);

}elseif(empty($_POST['message'])){
    $resultat='
        <div id="toats" class="notif" onload="killToats()">
            <div class="toats_header">
                <a class="toats_die">
                    <i class="icon ion-md-close"></i>
                </a>
                <h5>Notification :</h5>
            </div>
            <div class="toats_core">
                <p>
                Oups, il manque votre message
                </p>
            </div>
            
        </div>

        <script>
        const toats = document.querySelector(".notif");
        const close_toats = document.querySelector(".toats_die");
        close_toats.addEventListener("click", ()=>{
            toats.classList.add("hiden");
          });

        setTimeout(function(){ document.querySelector(".notif").classList.add("hiden");}, 3000 );
        </script>
        
        ';

        $tableau['resultat'] = $resultat;
    echo json_encode($tableau);
}else{
    $header='From:<postmaster@julien-quentier.fr>'."\n";
		

		$message='
    Nom de l\'expéditeur : '.$_POST['nom'].'
                
    Mail de l\'expéditeur : '.$_POST['email'].'
        
    Objet du message : '.$_POST['subject'].'
                    
    Message :
    '.nl2br($_POST['message']).'	

		        ';

		mail("contact@julien-quentier.fr", $header, $message);
        $resultat='
        <div id="toats" class="notif" onload="killToats()">
            <div class="toats_header">
                <a class="toats_die">
                    <i class="icon ion-md-close"></i>
                </a>
                <h5>Notification :</h5>
            </div>
            <div class="toats_core">
                <p>
                Votre message a bien été envoyé !
                </p>
            </div>
            
        </div>

        <script>

        const toats = document.querySelector(".notif");
        const close_toats = document.querySelector(".toats_die");
        close_toats.addEventListener("click", ()=>{
            toats.classList.add("hiden");
          });

        setTimeout(function(){ document.querySelector(".notif").classList.add("hiden");}, 4000 );
        </script>
        
        ';

    $tableau['resultat'] = $resultat;
    echo json_encode($tableau);
}