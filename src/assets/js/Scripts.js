

function addImageToList(inputCard, inputCardDesc){
    var unsortedList = $('#unSortedList').val();
    if(unsortedList == "")
    {
        unsortedList = inputCard;
    }
    else{
        unsortedList = unsortedList + "," + inputCard;
    }
    
    $('#unSortedList').val(unsortedList);

    var newCardDiv = "<div class='col-lg-1 mb-4'><div class='card'><div class='card-body img-wrap'><img src='assets/images/cardImagesPng/" + inputCard + ".png' class='card-img-top cards'></div></div></div>"

    $('#UserSelectedCards').append(newCardDiv);
}

function ClearSelection(){    
    $('#UserSelectedCards').empty();
    $('#unSortedList').val("");    
}