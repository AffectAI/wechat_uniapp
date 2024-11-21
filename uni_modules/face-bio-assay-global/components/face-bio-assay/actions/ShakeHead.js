import Action from "./Action.js"
class ShakeHead extends Action {
	constructor(second = 10, fun) {
		// super(second,fun,1,'请摇头')
		super(second,fun,1,'')
		this.minYaw = 0
		this.maxYaw = 0
	}
	takeFrame(faceData) {
		let face = faceData.faceInfo[0];
		// console.log(face, '=======3,face');
		if(face.angleArray.yaw>this.maxYaw){
			this.maxYaw = face.angleArray.yaw
		}
		if(face.angleArray.yaw<this.minYaw){
			this.minYaw = face.angleArray.yaw
		}
		// if(Math.abs(this.minYaw-this.maxYaw)>0.45 && (this.minYaw || this.maxYaw) ){
		// 	this.frames.push('摇头')
		// 	this.minYaw = 0
		// 	this.maxYaw = 0
		// }
	}
}

export default ShakeHead
