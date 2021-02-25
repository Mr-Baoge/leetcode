export const ListNode = function (val, next) {
  this.val = val;
  this.next = next || null;
}


export const generateLink = function(list) {
  const len = list.length;
  for (let i = len - 1; i >= 0; i--) {
    list[i] = new ListNode(list[i], list[i + 1])
  }
  return list[0]
}


