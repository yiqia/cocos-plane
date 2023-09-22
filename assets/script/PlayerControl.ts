import { _decorator, Component, EventTouch, Node, v3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerControl")
export class PlayerControl extends Component {
  start() {
    this.node.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
      const { x, y } = e.getUILocation();
      this.node.setWorldPosition(v3(x, y));
    });
  }

  update(deltaTime: number) {}
}
