function sendPushMessage() {

    var receiverToken = document.getElementById("push_ReceiverToken").value;
    var key = 'AAAAkHxC7-o:APA91bEYnOhk2Hxzh8X6mlkIFLe7u6g7zJiT7BYTtKm5d-zmBTLJ9fu-wSEPK1MVQ5aEEJIRXB_EOqTX_HDVbV2PjpvDGJ0siwEvtcMHEtGdnx9SIJ3t2fRV4ghMyQroYxwrSDT_ObSB'; // Server API key

    var endUsersList = [];
    endUsersList.push(receiverToken);

    var title = document.getElementById("push_Title");
    var message = document.getElementById("push_Message");

    // Generate Notification Content
    var notification = {
        'title': title.value,
        'body': message.value,
        'icon': 'notification-icon.png',
        'click_action': 'http://www.toyotabharat.com/'
    };


    //This function to sends push notification to users
    for (var i = 0; i <= endUsersList.length - 1; i++)
    {
    fetch('https://fcm.googleapis.com/fcm/send', {
        'method': 'POST',
        'headers': {
            'Authorization': 'key=' + key,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify({
            'notification': notification,
            'to': endUsersList[i]
        })
    }).then(function (response) {
      //  console.log(response);
    }).catch(function (error) {
       // console.error(error);
    })
}

}