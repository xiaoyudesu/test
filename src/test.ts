class A {
    public message1: string = "Aaron";
    private message2: string = "Angie";
    protected message3: string = "Tom";
    readonly message4: string = "Jerry";
    message5: string = "Sony";
}

class B extends A {
    constructor() {
        super()
        //  这里因为受修饰器影响无法读取到`message2`
        //  若写入 message2 在编码工具中则会显示红色波浪线提示错误
        //  Property 'message2' is private and only accessible within class 'A'.
        let {message1, message3, message4, message5} = this;
        console.log(message1, message3, message4, message5);
        //  若去更改 message4 的数据则会抛出下面的错误
        //  Cannot assign to 'message4' because it is a read-only property.
        //  this.message4 = "Sun";
    }
}

// console.log(123)

export default new B()