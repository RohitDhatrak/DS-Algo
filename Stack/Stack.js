// Implementation of Stack Data Structure

const _arr = new WeakMap;
const _count = new WeakMap;

class Stack{
    constructor(){
        _arr.set(this,[]);
    }

    push(val){
        _arr.get(this).push(val);
    }

    pop(){
        const arr = _arr.get(this);
        if(arr.length == 0)
            throw new Error("Stack is empty");
        arr.pop();
    }

    peek(){
        const arr = _arr.get(this);
        if(arr.length == 0)
            throw new Error("Stack is empty");
        return arr[arr.length - 1];
    }

    get count(){
        return _arr.get(this).length;
    }
}
