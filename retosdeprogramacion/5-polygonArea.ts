
interface Polygon {
    area(): number
    printArea(): void
}

class Triangle implements Polygon {
    constructor(private base: number, private height: number) {}
    
    area(): number {
        return (this.base * this.height) / 2
    }

    printArea(): void {
        console.log(`Es area del triangulo es ${this.area()}`)
    }
}

class Square implements Polygon {
    constructor(private base: number, private height: number) {}
    
    area(): number {
        return this.base * this.height
    }

    printArea(): void {
        console.log(`Es area del cuadrado es ${this.area()}`)
    }
}

class Rectangle implements Polygon {
    constructor(private base: number, private height: number) {}
    
    area(): number {
        return this.base * this.height
    }

    printArea(): void {
        console.log(`Es area del rectangulo es ${this.area()}`)
    }
}

function area(polygon: Polygon): number {
    polygon.printArea()
    return polygon.area()
}


function main(): void {
    area(new Triangle(10, 5))
    area(new Square(10, 5))
    area(new Rectangle(10, 5))
}

main()