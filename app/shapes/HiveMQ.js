// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var HiveMQ = CircuitFigure.extend({

   NAME: "HiveMQ",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:97,height:37},attr), setter, getter);
     var port;
     // Port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(97.81984329896957, 51.35135135135135));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#1C9BAB");
     port.setName("Port");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 97;
      this.originalHeight= 37;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L97,0 L97,37 L0,37");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // circle
       shape = this.canvas.paper.path('M97,32Q97,37 92, 37L5,37Q0,37 0, 32L0,5Q0,0 5, 0L92,0Q97,0 97, 5L97,32');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#919191","dasharray":null,"opacity":1});
       shape.data("name","circle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'HiveMQ');
       shape.attr({"x":18.609375,"y":17.4375,"text-anchor":"start","text":"HiveMQ","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#FFF824","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
HiveMQ = HiveMQ.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.attr({
            resizeable:false,
            "userData.elementId":this.id
        });
         this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
         
         this.value = 0;
         var _this = this;
         this.callback = function( msg){
             if(msg.elementId !== _this.attr("userData.elementId")){
                return;
             }
             _this.value = msg.value;
             _this.getOutputPort(0).setValue(_this.value);
            if(_this.value === 1){
                _this.layerAttr("circle",{fill:"#C21B7A"});
            }
            else{
                _this.layerAttr("circle",{fill:"#f0f0f0"});
            }
         }
    },
    
    calculate: function()
    {
    },
    
    onStart: function()
    {
        socket.on("mqtt:message", this.callback);
        this.callback({value:this.value})
    },

    onStop:function()
    {
        socket.off("mqtt:message", this.callback);
    },

    getParameterSettings: function()
    {
        return [
        {
            name:"elementId",
            label:"Element Id",
            property:{
                type: "string"
        }
        
        }];
    }
    
});