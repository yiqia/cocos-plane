import { _decorator, Component, director, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("BgControl")
export class BgControl extends Component {
  start() {}

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
