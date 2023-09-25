import {
  _decorator,
  Component,
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
    // 鼠标拖动
    this.node.on(Node.EventType.TOUCH_MOVE, (e: EventTouch) => {
      const { x, y } = e.getUILocation();
      this.node.setWorldPosition(v3(x, y));
    });

    // 创建子弹
    this.schedule(() => {
      const { x, y } = this.node.getPosition();
      const node = instantiate(this.bullet);
      node.setParent(this.node.parent);
      node.setPosition(x, y + 70);
    }, 0.2);
  }

  update(deltaTime: number) {}
}
