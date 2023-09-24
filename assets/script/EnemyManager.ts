import { _decorator, Component, instantiate, Node, Prefab } from "cc";
const { ccclass, property } = _decorator;

@ccclass("EnemyManager")
export class EnemyManager extends Component {
  @property(Prefab)
  enemy: Prefab;

  start() {
    const { x, y } = this.node.getPosition();
    this.schedule(() => {
      const node = instantiate(this.enemy);
      node.setPosition(Math.random() * 400 + 40, y);
      this.node.addChild(node);
    }, 0.5);
  }

  onBeginContact(other, self) {
    console.log("onCollisionEnter", other, self);
  }

  update(deltaTime: number) {}
}
