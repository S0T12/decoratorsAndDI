function memoize(targer: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    let cache = new Map();

    descriptor.value = function(...args: any[]) {
        const argsKey = args.join(",");

        if(cache.has(argsKey)) {
            return cache.get(argsKey);
        }

        const result = originalMethod.apply(this, args);

        cache.set(argsKey, result);
        return result;
    }
    return descriptor;
}


class MyClass {
    @memoize
    public fibonacci (num: number): number {
        if(num <= 1) return 1;
        return this.fibonacci(num - 1) + this.fibonacci(num - 2);
    }
}

const myInstance = new MyClass();

for (let i = 0; i <= 2000; i++) {
    console.log(`fibonacci ${i} : ${myInstance.fibonacci(i)}`);
}