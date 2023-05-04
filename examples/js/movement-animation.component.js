AFRAME.registerComponent('walk-animation', {
    schema:{
        speed:{default:1}
    },
    init: function () {
      this.entity = this.el.getObject3D('mesh')
      this.isWalking - false;
    },
    tick: function () {
        const currentPositon = this.el.object3D.position;
        console.log(currentPositon);
        const previousPosition = this.previousPosition || currentPositon.clone();

        if(currentPositon.distanceTo(previousPosition) > 0.01){
            if(!this.isWalking){
                this.isWalking = true;
                this.entity.animations[0].play();
            }
        }
        else{
            if(this.isWalking){
                this.isWalking = false;
                this.entity.animations[0].stop();
            }
        }
        this.previousPosition = currentPositon.clone();
    }
  });