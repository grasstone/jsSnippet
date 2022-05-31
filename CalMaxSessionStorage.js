    if(!window.sessionStorage) {
        console.log ('the current browser does not support sessionStorage!')
    }    
    var test = '0123456789';
    var add = function(num) {
        num += num;
        if(num.length == 10240) {
            test = num;
            return;
        }
        add(num);
    }
    add(test);
    var sum = test;
    var show = setInterval(function(){
        sum += test;
        try {
            window.sessionStorage.removeItem('test');
            window.sessionStorage.setItem('test', sum);
            console.log(sum.length / 1024 + 'KB');
        } catch(e) {
            alert( sum.length  /1024 +'kb exceeds the maximum limit ');
            clearInterval(show);
        }
    }, 0.1)