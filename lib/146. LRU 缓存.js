/** 链表 */
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class DoubleList {
  // 尾部是最近使用的
  // 如果超过容量，优先删除头部
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  addLast(node) {
    // head <-> f <-> (node) -> tail
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  remove(node) {
    // head <-> f <-> (node) <-> t <-> tail
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
    return node;
  }
  removeFirst() {
    if (!this.size) {
      return null;
    }
    const first = this.head.next;
    this.remove(first);
    return first;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.cache = new DoubleList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const { map, cache } = this;
  if (!map.has(key)) {
    return -1;
  }
  const node = map.get(key);
  cache.remove(node);
  cache.addLast(node);
  return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const { map, cache } = this;
  // 1. 保证没有 key
  if (map.has(key)) {
    const x = map.get(key);
    cache.remove(x);
    map.delete(x.key);
  }
  // 2. 判断是否超过容量，超过删除最久未使用
  if (cache.size >= this.capacity) {
    const y = cache.removeFirst();
    map.delete(y.key);
  }
  // 3. 执行插入
  const node = new Node(key, value);
  cache.addLast(node);
  map.set(key, node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */






