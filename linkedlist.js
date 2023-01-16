class Node{
    constructor(value, prev, next, index){
        this.value = value || null;
        this.prev = prev || null;
        this.next = next || null;
        this.index = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        if(!this.tail){
            this.head = this.tail = new Node(value);
            this.size++;
        }else{
            let oldTail = this.tail;
            this.tail = new Node(value);
            this.prev = oldTail;
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
            this.size++;
        }
    }

    prepend(){
        if(!this.head){
            this.head = this.tail = new Node(value);
        }else{
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
            this.size++;
        }
    }

    at(index) {
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
            if (temp == null) return "There is no item for this index";
        }
        return temp;
    }

    pop(){
        delete this.tail;
        if(!this.tail){
            this.head = this.tail = this.head;
        }
        this.size--;
    }

    contains(value){
        let temp = this.head;
        while (temp != null){
            if (temp.value === value) return true;
            temp = temp.next;
        }
        return false;
    }

    find(value) {
        let temp = this.head;
        let index = 0;
        while (temp != null) {
            if(temp.value === value) return index;
            temp = temp.next;
            index++;
        }
        return null;
  }
}

let list = new LinkedList();
