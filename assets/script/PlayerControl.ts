import {
  _decorator,
  Component,
  director,
  EventTouch,
  instantiate,
  Node,
  Prefab,
  v3,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerControl")
export class PlayerControl extends Component {
  @property(Prefab)
  bullet: Prefab = null;

  start() {
    this.node.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
      const { x, y } = e.getUILocation();
      this.node.setWorldPosition(v3(x, y));
    });

    this.schedule(() => {
      const { x, y } = this.node.getPosition();
      const node = instantiate(this.bullet);
      node.setParent(this.node.parent);
      node.setPosition(x, y + 70);
    }, 0.2);
  }

  update(deltaTime: number) {}
}
