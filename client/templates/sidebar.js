Template.sidebarTemplate.onRendered(function(){
    $('.ui.accordion').accordion();
});

Template.sidebarTemplate.helpers({
    currentTime:function(){
        var t = Chronos.currentTime();
        return t.toLocaleDateString()+":"+t.toLocaleTimeString(); // updates every second
    }
})