(function() {
    'use strict';

    angular
        .module('app')
        .controller('alertController', alertController);

    alertController.$inject = [];
    function alertController() {
        
        var vm = this;

        // properties
        vm.show = true;
        vm.showAlert = true;

        // functions
        vm.closeAlert = closeAlert;
        vm.closeTimer = closeTimer;

        vm.message = 'Seting angular-ui-bootstrap scafolding!'

                

    
        function closeAlert(){
            vm.show = false;
        }

        function closeTimer(){
            vm.showAlert = false;
        }
    }
})();