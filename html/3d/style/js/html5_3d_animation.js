(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7- (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

var y = 0;

function getStep(totalstep, duration, t, dt, timing) {
    return totalstep / duration * timing(t / duration) * dt;
}

function movement(t, dt) {
    var to = 1000,
        duration = 707; // milliseconds
    y += getStep(to, duration, t, dt, function(t) { return 2 * t });
    y = Math.min(y, to);
    div.style.transform = "translate3d(0, " + y + "px, 0)";
    console.log(t);
    return (y) < to;
}
(function(a){
    a.fn.html5_3d_animation=function(p){
        var p=p||{};
        var w_w=p&&p.window_width?p.window_width:"500";//canvas窗口的宽度。
        var w_h=p&&p.window_height?p.window_height:"400";
        var w_b=p&&p.window_background?p.window_background:"#000";//canvas窗口的背景颜色。
        var s_c=p&&p.star_count?p.star_count:"600";//星星的数量。
        var s_color=p&&p.star_color?p.star_color:"#FFF";//星星的颜色。
        var s_d=p&&p.star_depth?p.star_depth:"250";//星空的深度。
        var dom=a(this);
        var fov = parseInt(s_d);
        var SCREEN_WIDTH = parseInt(w_w);
        var SCREEN_HEIGHT = parseInt(w_h);
        var HALF_WIDTH = SCREEN_WIDTH/2;
        var HALF_HEIGHT = SCREEN_HEIGHT/2;
        var c_id = dom.attr("id");
        var numPoints = s_c;
        dom.attr({ width: w_w, height: w_h});
        setup();
        function setup(){
            function draw3Din2D(point3d){
               var x3d = point3d[0],
                y3d = point3d[1],
                z3d = point3d[2];
                var scale = fov/(fov+z3d);
                //console.log(x3d * scale);
                var x2d = (x3d * scale) + HALF_WIDTH;
                var y2d = (y3d * scale)  + HALF_HEIGHT;
                c.lineWidth= 2;
                //console.log(scale);
                c.strokeStyle = s_color;
                c.beginPath();
                c.moveTo(x2d,y2d);
                c.lineTo(x2d+2,y2d);
                c.stroke();
            }
            var canvas = document.getElementById(c_id);
            var c = canvas.getContext('2d');
            var points = [];
            function initPoints(){
                for (var i=0; i<numPoints; i++){
                    var point = [(Math.random()*w_w)-700, (Math.random()*w_h)-200 , (Math.random()*400)-200 ];
                    points.push(point);
                }
            }
            function render(){
                c.fillStyle=w_b;
                c.fillRect(0,0, SCREEN_WIDTH, SCREEN_HEIGHT);
                for (var i=0; i<numPoints; i++){
                   var point3d = points[i];
                    var z3d = point3d[2];
                    z3d-=4;
                    if(z3d<-fov) z3d +=w_w/2;
                    point3d[2] = z3d;
                    draw3Din2D(point3d);
                }
                //var show = document.getElementById('show');
                //show.appendChild('p');
            }
            initPoints();
            //var loop = setTimeout(function(){
            //    render();
            //}, 10);
            var loop = setInterval(function(){
                render();
            }, 45);
        }
    }
})(jQuery);