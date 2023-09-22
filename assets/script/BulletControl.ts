import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BulletControl")
export class BulletControl extends Component {
  start() {}

  update(deltaTime: number) {
    const { x, y } = this.node.getPosition();
    this.node.setPosition(x, y + 600 * deltaTime);
  }
}
