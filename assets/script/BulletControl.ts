import { _decorator, Component, director, Node, view } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BulletControl")
export class BulletControl extends Component {
  start() {}

  update(deltaTime: number) {
    const { x, y } = this.node.getPosition();
    const moveY = y + 600 * deltaTime;
    this.node.setPosition(x, moveY);
    if(moveY > 800 ) {
      this.node.destroy();
    }
  }
  
  onBeginContact(other, self) {
    console.log("onCollisionEnter", other, self);
  }
}
