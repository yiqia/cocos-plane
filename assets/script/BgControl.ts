import {
  _decorator,
  Collider2D,
  Component,
  Contact2DType,
  director,
  Node,
  PhysicsSystem2D,
} from "cc";
import { EnemyControl } from "./EnemyControl";
import { BulletControl } from "./BulletControl";
const { ccclass, property } = _decorator;

@ccclass("BgControl")
export class BgControl extends Component {
  start() {
    PhysicsSystem2D.instance.on(
      Contact2DType.BEGIN_CONTACT,
      this.onBeginContact,
      this
    );
  }

  // 只在两个碰撞体开始接触时被调用一次
  onBeginContact(self: Collider2D, other: Collider2D) {
    if (other.tag === 1 && self.tag === 0) {
      other.getComponent(EnemyControl).die();
      self.getComponent(BulletControl).die();
    } else if (other.tag === 0 && self.tag === 1) {
      other.getComponent(BulletControl).die();
      self.getComponent(EnemyControl).die();
    }
  }

  // 生命周期每帧调用函数
  update(deltaTime: number) {
    // 使用this.node.children获取当前节点下的子节点
    for (let item of this.node.children) {
      // 使用getPosition获取坐标信息
      const { x, y } = item.getPosition();
      // 计算移动坐标
      const moveY = y - 100 * deltaTime;
      item.setPosition(x, moveY);
      // 如果超出屏幕 重新回到顶部，也就是当前位置加上两倍的高度
      if (moveY < -870) {
        item.setPosition(x, moveY + 852 * 2);
      }
    }
  }
}
