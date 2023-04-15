function hi(name, callbackHi){
    setTimeout(function(){
        console.log('Hola ' + name);
        callbackHi(name);
    },1500);
};

function speak(callbackSpeak){
    setTimeout(() => {
        console.log('speaking... ');
        callbackSpeak();
    });
};

function bye(name, callbackBye){
    setTimeout(() => {
        console.log('Bye ' + name);
        callbackBye();
    },1000);
};

function speaking(name, times, callbackSpeaking){
    if (times > 0){
        speak(() => {
            speaking(name, --times, callbackSpeaking)
        });
    }else{
        bye(name, callbackSpeaking);
    }
}
console.log('Init process');
hi('zaky',(name)=> {
    speaking(name, 3, () => {
        console.log('End Process');
    });
});
/*hi('zaky',(name)=> {
    speak(() => {
        speak(() => {
            speak(() => {
                bye(name,()=> {
                    console.log('End Process');
                });
            });
        });
    });
});*/