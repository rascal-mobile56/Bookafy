
angular.module('starter.controllers', [])
    .controller('MainCtrl', function($scope, $interval, $window, $timeout, $ionicSlideBoxDelegate, $cordovaInAppBrowser) {
        
        console.log(localStorage.getItem('key'));

        var aa =  localStorage.getItem('key');
        
        if(aa == 1)
        {
            var options1 = {
                location: 'no',
                clearcache: 'no',
                toolbar: 'no'
            };
            $timeout( function() {
                $cordovaInAppBrowser.open('https://app.bookafy.com/users/sign_in', '_blank', options1);
            }, 500);
        } else {
            console.log("empty");
        }

        var pos = 0;
        var posFlag = false;
        $scope.slideHasChanged = function($index){
            pos = 0;
            posFlag = false;
            switch ($index){
                case 0:
                    document.getElementById("slide").style.backgroundImage = "url('img/image1.jpg')";
                    break;
                case 1:
                    document.getElementById("slide").style.backgroundImage = "url('img/image2.jpg')";
                    break;
                case 2:
                    document.getElementById("slide").style.backgroundImage = "url('img/image3.jpg')";
                    break;
                case 3:
                    document.getElementById("slide").style.backgroundImage = "url('img/image4.jpg')";
                    break;
                case 4:
                    document.getElementById("slide").style.backgroundImage = "url('img/image5.jpg')";
                    break;
                case 5:
                    document.getElementById("slide").style.backgroundImage = "url('img/image6.jpg')";
                    break;
                case 6:
                    document.getElementById("slide").style.backgroundImage = "url('img/image7.jpg')";
                    break;
            }
        };

        $interval(function(){
            if(pos == -50){
                posFlag = true;
            } else if(pos == 0){
                posFlag = false;
            }

            if(posFlag){
                pos++;
            } else {
                pos--;
            }

            document.getElementById("slide").style.backgroundPosition = pos + 'px 0';

        }, 300);

        $scope.skip = function() {
            $ionicSlideBoxDelegate.slide(6);
        };
        var options = {
                location: 'no',
                clearcache: 'no',
                toolbar: 'yes'
            };
        $scope.login = function() {
            
            localStorage.setItem('key', 1);
            console.log(localStorage.getItem('key'));
            $cordovaInAppBrowser.open('https://app.bookafy.com/users/sign_in', '_blank', options);
        };
        $scope.signup = function() {
            localStorage.setItem('key', 1);
             console.log(localStorage.getItem('key'));
            $cordovaInAppBrowser.open('https://app.bookafy.com/new_client', '_blank', options);
        };

    });